import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
// import { prisma } from "@/lib/prisma"; // Prisma client

const OTP_SECRET = process.env.OTP_SECRET || "supersecret";

export async function POST(req: Request) {
	try {
		const { email, otp, token } = await req.json();

		if (!email || !otp || !token) {
			return NextResponse.json({
				success: false,
				message: "All fields are required!",
			});
		}

		// Verify the JWT token
		const decoded = jwt.verify(token, OTP_SECRET) as {
			email: string;
			otp: string;
		};

		if (decoded.email !== email || decoded.otp !== otp) {
			return NextResponse.json({ success: false, message: "Invalid OTP!" });
		}
		console.log(email, " email verified");
		// Mark email as verified in the database
		// await prisma.gmailVerificationCode.upsert({
		// 	where: { email },
		// 	update: { emailVerified: true },
		// 	create: { email, emailVerified: true }, // Create if not exists
		// });

		return NextResponse.json({ success: true, message: "Email verified!" });
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			success: false,
			error: "OTP expired or invalid!",
		});
	}
}
