import { JSX } from "@huuma/ui/jsx-runtime";
import { Props } from "@huuma/ui";

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
) {
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

  return (
    <section {...props}>
      <div class={wrapperClass}>
        {titleSlot && (
          <h2 class="tile__section__title heading-md">{titleSlot}</h2>
        )}
        {children}
      </div>
    </section>
  );
}
