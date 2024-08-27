import { HeaderProps } from "@/components/header/desktop";

export const menuItemsProps: HeaderProps["menuItems"] = [
	{
		label: "خانه",
		href: "/",
	},
	{
		label: "درباره ما",
		href: "/about",
	},
	{
		title: "خدمات",
		subMenuItems: [
			{
				label: "مشاوره طراحی شبکه",
				href: "/services",
			},
			{
				label: "ارائه راهکار  شبکه",
				href: "/services/single",
			},
		],
	},

	{
		title: "محصولات",
		subMenuItems: [
			{
				label: "روتر-سوییچ سیسکو",
				href: "/router",
			},
			{
				label: "روتر-سوییچ هواوی",
				href: "/huawei",
			},
			{
				label: "روترهای میکروتیک",
				href: "/mt",
			},
			{
				label: "مودم های ADSL",
				href: "/adsl",
			},
			{
				label: "مودم های ONT",
				href: "/ont",
			},
		],
	},
	{
		title: "آموزش",
		subMenuItems: [
			{
				label: "مبانی شبکه",
				href: "/basics",
			},
			{
				label: "CCNA Cisco",
				href: "/CCNA",
			},
			{
				label: "CCNP Cisco",
				href: "/CCNP",
			},
			{
				label: "CCIE Cisco",
				href: "/CCIE",
			},
			{
				label: "MTCNA Mikrotik",
				href: "/MTCNA",
			},
			{
				label: "HCNA Huawei",
				href: "/HCNA",
			},
			{
				label: "HCNP Huawei",
				href: "/HCNP",
			},
		],
	},

	{
		label: "تماس با ما",
		href: "/contact",
	},
];
