import type { Metadata } from "next";
import "@assets/css/globals.css";

export const metadata: Metadata = {
	title: "Next Navbar",
	description: "Nextjs",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
