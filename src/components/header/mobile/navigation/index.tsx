import React from "react";
import { CustomLink } from "@/components/custom-link";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/utils/shadcn";

import { FiChevronDown } from "react-icons/fi";
import { HeaderProps } from "../../desktop";

const menuItemClasses = cn(
	"min-h-[3rem] inline-flex items-center w-full gap-4 rounded-none border-b-0  px-5 text-left font-primary text-base  text-gray-600 font-bold no-underline hover:no-underline border-t focus:text-black active:text-black"
);

export function Navigation({ menuItems }: Pick<HeaderProps, "menuItems">) {
	return (
		<Accordion type="single" collapsible className="grid w-full">
			{menuItems.map((menuItem, index) => (
				<React.Fragment key={index}>
					{"title" in menuItem ? (
						<>
							{/* Megamenu  */}
							<AccordionItem
								value={`${menuItem.title}-${index}`}
								className="border-none">
								<AccordionTrigger
									className={cn(
										menuItemClasses,
										"[&[data-state='open']&_.accordion-icon]:-rotate-180 [&[data-state='open']]:bg-gray-200 [&[data-state='open']]:text-black"
									)}>
									{menuItem.title}
									<span className="accordion-icon flex-none text-[1.25rem] transition-transform duration-400">
										<FiChevronDown />
									</span>
								</AccordionTrigger>
								<AccordionContent>
									{menuItem.subMenuItems &&
										menuItem
											.subMenuItems
											.length && (
											<nav aria-label="megamenu-items">
												<ul className="grid bg-gray-100 text-gray-600">
													{menuItem.subMenuItems.map(
														(
															subMenuItem,
															index
														) => (
															<li
																key={
																	index
																}>
																<CustomLink
																	href={
																		subMenuItem.href
																	}
																	openNewTab={
																		subMenuItem.openNewTab
																	}
																	className={cn(
																		menuItemClasses,
																		"text-gray-500 hover:text-black hover:bg-gray-50",
																		"px-10"
																	)}>
																	{
																		subMenuItem.label
																	}
																</CustomLink>
															</li>
														)
													)}
												</ul>
											</nav>
										)}
								</AccordionContent>
							</AccordionItem>
						</>
					) : (
						<>
							{/* Normal Link  */}
							<CustomLink
								href={menuItem.href}
								openNewTab={menuItem.openNewTab}
								className={menuItemClasses}>
								{menuItem.label}
							</CustomLink>
						</>
					)}
				</React.Fragment>
			))}
		</Accordion>
	);
}
