import { Section, SectionProps } from "../layout/section.tsx";

export interface ImageSectionProps extends SectionProps {
  src: string;
}

export function ImageBanner(
  { src, wrapperClass, class: className, children: _, ...props }:
    ImageSectionProps,
) {
  className = className
    ? `tetra__image-banner ${className}`
    : "tetra__image-banner";
  wrapperClass = wrapperClass
    ? `tetra__image-banner__wrapper ${wrapperClass}`
    : "tetra__image-banner__wrapper";

  return (
    <Section
      maxWidth="7xl"
      class={className}
      wrapperClass={wrapperClass}
      {...props}
    >
      <img class="tetra__image-banner__image" src={src} />
    </Section>
  );
}
