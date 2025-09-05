import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

import { Section, type SectionProps } from "../layout/section.ts";

interface HeroSectionProps extends SectionProps {
  callToActionSlot: JSX.Element;
}

export function HeroSection(
  {
    titleSlot,
    callToActionSlot,
    children,
    class: className,
    wrapperClass,
    ...props
  }: HeroSectionProps,
): JSX.Element {
  className = className ? `tile__hero ${className}` : "tile__hero";

  return jsx(Section, {
    padding: "md",
    maxWidth: "7xl",
    class: className,
    wrapperClass,
    ...props,
    children: [
      jsx("div", {
        class: "tile__hero__wrapper",
        children: [
          jsx("h1", {
            class: "tile__hero__heading heading-xl",
            children: titleSlot,
          }),
          jsx("p", { class: "tile__hero__teaser", children }),
          callToActionSlot,
        ],
      }),
    ],
  });
}
