import { type JSX, jsx } from "@huuma/ui/jsx-runtime";
import type { Props } from "@huuma/ui";

import { Section, type SectionProps } from "../layout/section.ts";

export function BenefitsSection(
  { children, wrapperClass: wrapperClass, class: className, ...props }:
    SectionProps,
): JSX.Element {
  wrapperClass = wrapperClass
    ? `tile__benefits__wrapper ${wrapperClass}`
    : "tile__benefits__wrapper";
  className = className ? `tile__benefits ${className}` : "tile__benefits";
  return jsx(Section, {
    padding: "md",
    maxWidth: "7xl",
    class: className,
    wrapperClass: wrapperClass,
    ...props,
    children,
  });
}

export interface BenefitProps extends Props {
  titleSlot: JSX.Element;
}

export function Benefit({ titleSlot, children }: BenefitProps): JSX.Element {
  return jsx("div", {
    class: "tile__benefit__item",
    children: [
      jsx("h2", {
        class: "tile__benefit__item__heading heading-base",
        children: titleSlot,
      }),
      jsx("p", { class: "tile__benefit__item__text", children }),
    ],
  });
}
