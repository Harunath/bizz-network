"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<SessionProvider>{children}</SessionProvider>
		</div>
	);
};

export default Providers;
