import { type JSX, jsx } from "@huuma/ui/jsx-runtime";
import type { Props } from "@huuma/ui";

import { Section, type SectionProps } from "../layout/section.ts";

export interface ContactSectionProps extends SectionProps {
  departements: ContactDepartement[];
}

export function ContactSection(
  { departements, ...props }: ContactSectionProps,
): JSX.Element {
  return jsx(Section, {
    maxWidth: "7xl",
    padding: "lg",
    ...props,
    children: jsx("div", {
      class: "tile__contact-section__wrapper",
      children: departements.map((departement) => (
        jsx(ContactDepartementItem, {
          titleSlot: departement.title,
          callToActionSlot: departement.callToAction,
          children: departement.content,
        })
      )),
    }),
  });
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
): JSX.Element {
  return jsx("div", {
    class: "tile__contect__departement",
    children: [
      titleSlot &&
      jsx("h3", {
        class: "tile__contact__title heading-base",
        children: titleSlot,
      }),
      children && jsx("p", { class: "tile__contact__content", children }),
      callToActionSlot,
    ],
  });
}
