import type { Props } from "@huuma/ui";
import { Section } from "../layout/section.tsx";
import { JSX } from "@huuma/ui/jsx-runtime";

export interface IntegrationsSectionProps extends Props {
  callToActionSlot?: JSX.Element;
  titleSlot?: JSX.Element;
}

export function IntegrationsSection(
  { children, callToActionSlot, titleSlot }: IntegrationsSectionProps,
) {
  return (
    <Section
      titleSlot={titleSlot}
      maxWidth="7xl"
      padding="lg"
      class="tile__integrations-section"
    >
      {children}
      {callToActionSlot && (
        <div class="tile__integrations__cta">
          {callToActionSlot}
        </div>
      )}
    </Section>
  );
}
