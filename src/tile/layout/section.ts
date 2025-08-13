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
  props = {
    class: typeof className === "string"
      ? [...className.split(" "), sectionPadding].join(" ")
      : `${sectionPadding}`,
    ...props,
  };
  wrapperClass = [
    `tile__section__wrapper tile__section__wrapper--max-w-${
      maxWidth ?? "full"
    }`,
    wrapperClass,
  ].join(
    " ",
  );

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
