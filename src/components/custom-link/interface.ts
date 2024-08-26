import { LinkProps } from "@components/common-types";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";

export type CustomLinkProps = Omit<LinkProps, "label"> &
	PropsWithChildren &
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		prefetch?: boolean;
	};
