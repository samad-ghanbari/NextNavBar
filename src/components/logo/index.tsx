import { CustomLink } from "@/components/custom-link";
import Image from "next/image";

import logo from "@assets/images/logo.png";

export function BrandLogo() {
	return (
		<CustomLink href="/">
			<Image
				className="logo"
				src={logo.src}
				width={50}
				height={50}
				placeholder="blur"
				blurDataURL={logo.blurDataURL}
				alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
				sizes="100vw"
				priority
			/>
		</CustomLink>
	);
}
