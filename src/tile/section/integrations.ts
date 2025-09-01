import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

import { Section, type SectionProps } from "../layout/section.ts";

export interface IntegrationsSectionProps extends SectionProps {
  callToActionSlot?: JSX.Element;
}

export function IntegrationsSection(
  { children, callToActionSlot, titleSlot, class: className }:
    IntegrationsSectionProps,
): JSX.Element {
  className = className
    ? `tile__integrations-section ${className}`
    : "tile__integrations-section";
  return jsx(Section, {
    titleSlot,
    maxWidth: "7xl",
    padding: "lg",
    class: className,
    children: [
      children,
      callToActionSlot && (
        jsx("div", {
          class: "tile__integrations__cta",
          children: callToActionSlot,
        })
      ),
    ],
  });
}
