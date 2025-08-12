import { Props } from "@huuma/ui";
import { Section, SectionProps } from "../layout/section.tsx";
import { JSX } from "@huuma/ui/jsx-runtime";

export function BenefitsSection(
  { children, wrapperClass: wrapperClass, class: className, ...props }:
    SectionProps,
) {
  wrapperClass = wrapperClass
    ? `tetra__benefits__wrapper ${wrapperClass}`
    : "tetra__benefits__wrapper";
  className = className ? `tetra__benefits ${className}` : "tetra__benefits";
  return (
    <Section
      padding="md"
      maxWidth="7xl"
      class={className}
      wrapperClass={wrapperClass}
      {...props}
    >
      {children}
    </Section>
  );
}

interface BenefitProps extends Props {
  titleSlot: JSX.Element;
}

export function Benefit({ titleSlot, children }: BenefitProps) {
  return (
    <div class="tetra__benefit__item">
      <h2 class="tetra__benefit__item__heading heading-base">{titleSlot}</h2>
      <p class="tetra__benefit__item__text">{children}</p>
    </div>
  );
}
