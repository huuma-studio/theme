import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

import { Section, type SectionProps } from "../layout/section.ts";

export interface IntegrationsSectionProps extends SectionProps {
  callToActionSlot?: JSX.Element;
}

export function IntegrationsSection(
  { children, callToActionSlot, titleSlot }: IntegrationsSectionProps,
): JSX.Element {
  return jsx(Section, {
    titleSlot,
    maxWidth: "7xl",
    padding: "lg",
    class: "tile__integrations-section",
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
