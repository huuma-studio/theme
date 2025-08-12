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
  className = className ? `tetra__hero ${className}` : "tetra__hero";

  return (
    <Section padding="md" maxWidth="7xl" class={className} {...props}>
      <div class="tetra__hero__wrapper">
        <h1 class="tetra__hero__heading heading-xl">
          {titleSlot}
        </h1>
        <p class="tetra__hero__teaser">
          {children}
        </p>
        {callToActionSlot}
      </div>
    </Section>
  );
}
