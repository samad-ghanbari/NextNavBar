"use client";

import { LinkProps } from "@/components/common-types";
import { Container } from "@/components/container";
import { BrandLogo } from "@/components/logo";
import { useStickyHeader } from "@/components/header/utils/use-sticky-header";

import { cn } from "@/utils/shadcn";
import { Navigation } from "@/components/header/desktop/common/navigation";
import { headerData } from "@assets/data/header";
import { dir } from "console";

interface SubMenu {
	title: string;
	subMenuItems: LinkProps[];
}

export interface HeaderProps {
	menuItems: (LinkProps | SubMenu)[];
}

export function DesktopHeader() {
	const { menuItems } = headerData;
	const isSticky = useStickyHeader(700);

	return (
		<header
			className={cn(
				"left-0 right-0 top-0 z-99 mx-auto hidden w-full py-[26px] lg:block",
				isSticky
					? "sticky-header fixed left-0 top-0 w-full animate-fadeInDown bg-white/90 backdrop-blur-md [box-shadow:0px_0px_15px_10px_rgba(128,128,128,1)] "
					: "absolute"
			)}>
			<Container>
				{/* Contact box  */}

				<div className="flex items-right justify-between gap-x-10">
					{/* Navigation  */}
					{menuItems && menuItems.length > 0 && (
						<Navigation menuItems={menuItems} />
					)}

					{/* Brand logo  */}
					<div className="flex-none">
						<BrandLogo />
					</div>
				</div>
			</Container>
		</header>
	);
}
