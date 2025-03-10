"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
			<div className="max-w-7xl mx-auto flex justify-between items-center px-2 py-3">
				<Link
					href="/"
					className="text-2xl font-bold text-red-600 no-underline mr-2 flex items-center">
					Hello<span className="text-black">-Bizz</span>
					<sup className="text-[6px] mb-4 text-black border-gray-900">TM</sup>
				</Link>

				<button
					className="md:hidden text-black"
					onClick={() => setMenuOpen(!menuOpen)}>
					{menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
				</button>

				<ul
					className={`md:flex md:space-x-6 font-small absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-5 md:p-0 transition-all duration-300 ${
						menuOpen ? "block" : "hidden"
					}`}>
					{[
						{ name: "The HelloBizz Experience", href: "/experience" },
						{ name: "Our Business Community", href: "/community" },
						{ name: "Success Stories", href: "/success" },
						{ name: "Opportunities", href: "/opportunities" },
						{ name: "About Us", href: "/about" },
					].map((link, index) => (
						<li key={index} className="py-2 md:py-0">
							<Link
								href={link.href}
								className="text-black hover:text-red-600 no-underline">
								{link.name}
							</Link>
						</li>
					))}
				</ul>

				<div className="hidden md:flex items-center space-x-4 px-3">
					<Link
						href="mailto:support@bizzn.com"
						className="flex items-center text-red-600 font-semibold no-underline">
						<MdEmail size={20} className="mr-1" />
						support@bizzn.com
					</Link>
					<Link href="/invite">
						<button className="px-4 py-1 text-white bg-red-600 rounded-2xl transition-all duration-300 hover:bg-white hover:text-red-600 border-2 border-red-600">
							Get Invited
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
