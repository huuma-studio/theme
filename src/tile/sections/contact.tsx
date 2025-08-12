import { JSX } from "@huuma/ui/jsx-runtime";
import { Props } from "@huuma/ui";

import { Section } from "../layout/section.tsx";

export interface ContactSectionProps extends Props {
  titleSlot?: JSX.Element;
  departements: ContactDepartement[];
}

export function ContactSection(
  { titleSlot, departements }: ContactSectionProps,
) {
  return (
    <Section titleSlot={titleSlot} maxWidth="7xl" padding="lg">
      <div class="tetra__contect-section__wrapper">
        {departements.map((departement) => (
          <ContactDepartementItem
            titleSlot={departement.title}
            callToActionSlot={departement.callToAction}
          >
            {departement.content}
          </ContactDepartementItem>
        ))}
      </div>
    </Section>
  );
}

export interface ContactDepartement {
  title: JSX.Element;
  content: JSX.Element;
  callToAction?: JSX.Element;
}

export interface ContactDepartmentItemProps extends Props {
  titleSlot: JSX.Element;
  callToActionSlot?: JSX.Element;
}
function ContactDepartementItem(
  { titleSlot, children, callToActionSlot }: ContactDepartmentItemProps,
) {
  return (
    <div class="tetra__contect__departement">
      {titleSlot && (
        <h3 class="tetra__contact__title heading-base">{titleSlot}</h3>
      )}
      {children && <p class="tetra__contact__content">{children}</p>}
      {callToActionSlot}
    </div>
  );
}
