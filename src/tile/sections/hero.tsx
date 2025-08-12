import { JSX } from "@huuma/ui/jsx-runtime";
import { Section, SectionProps } from "../layout/section.tsx";

interface HeroSectionProps extends SectionProps {
  callToActionSlot: JSX.Element;
}

export function HeroSection(
  {
    titleSlot,
    callToActionSlot,
    children,
    class: className,
    ...props
  }: HeroSectionProps,
) {
  className = className ? `tile__hero ${className}` : "tile__hero";

  return (
    <Section padding="md" maxWidth="7xl" class={className} {...props}>
      <div class="tile__hero__wrapper">
        <h1 class="tile__hero__heading heading-xl">
          {titleSlot}
        </h1>
        <p class="tile__hero__teaser">
          {children}
        </p>
        {callToActionSlot}
      </div>
    </Section>
  );
}
