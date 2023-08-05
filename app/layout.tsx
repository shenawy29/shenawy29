import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";

const ubuntu = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
	title: "Mohamed El-Shenawy",
	description: "A Personal portfolio",
	icons: "/ankh.svg",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={ubuntu.className}>{children}</body>
		</html>
	);
}
