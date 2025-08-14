import { type JSX, jsx } from "@huuma/ui/jsx-runtime";
import type { Props } from "@huuma/ui";

export interface SectionProps extends Props {
  class?: string;
  maxWidth?: "4xl" | "7xl";
  wrapperClass?: string;
  titleSlot?: JSX.Element;
  id?: string;
  padding?: "sm" | "md" | "lg" | "xl";
}

export function Section(
  {
    children,
    class: className,
    maxWidth,
    wrapperClass,
    padding,
    titleSlot,
    ...props
  }: SectionProps,
): JSX.Element {
  const sectionPadding = `tile__section--padding-y-${padding ?? "0"}`;
  className = className ? `${sectionPadding} ${className}` : sectionPadding;

  const sectionMaxWidth =
    `tile__section__wrapper tile__section__wrapper--max-w-${
      maxWidth ?? "full"
    }`;
  wrapperClass = wrapperClass
    ? `${sectionMaxWidth} ${wrapperClass}`
    : sectionMaxWidth;

  return jsx("section", {
    ...props,
    class: className,
    children: jsx("div", {
      class: wrapperClass,
      children: [
        titleSlot &&
        jsx("h2", {
          class: "tile__section__title heading-md",
          children: titleSlot,
        }),
        children,
      ],
    }),
  });
}
