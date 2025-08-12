import { Section, SectionProps } from "../layout/section.tsx";

export interface ImageSectionProps extends SectionProps {
  src: string;
}

export function ImageBanner(
  { src, wrapperClass, class: className, children: _, ...props }:
    ImageSectionProps,
) {
  className = className
    ? `tile__image-banner ${className}`
    : "tile__image-banner";
  wrapperClass = wrapperClass
    ? `tile__image-banner__wrapper ${wrapperClass}`
    : "tile__image-banner__wrapper";

  return (
    <Section
      maxWidth="7xl"
      class={className}
      wrapperClass={wrapperClass}
      {...props}
    >
      <img class="tile__image-banner__image" src={src} />
    </Section>
  );
}
