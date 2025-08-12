import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

import { Section, type SectionProps } from "../layout/section.ts";

export interface ImageSectionProps extends SectionProps {
  src: string;
  alt?: string;
}

export function ImageBanner(
  { src, wrapperClass, class: className, children: _, alt, ...props }:
    ImageSectionProps,
): JSX.Element {
  className = className
    ? `tile__image-banner ${className}`
    : "tile__image-banner";
  wrapperClass = wrapperClass
    ? `tile__image-banner__wrapper ${wrapperClass}`
    : "tile__image-banner__wrapper";

  return jsx(Section, {
    maxWidth: "7xl",
    class: className,
    wrapperClass: wrapperClass,
    ...props,
    children: jsx("img", { class: "tile__image-banner__image", src, alt }),
  });
}
