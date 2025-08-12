import { type JSX, jsx } from "@huuma/ui/jsx-runtime";
import type { Props } from "@huuma/ui";

import { Section, type SectionProps } from "../layout/section.ts";
import { OptionIcon } from "../icons.ts";

export function SupportSection(
  { wrapperClass, ...props }: SectionProps,
): JSX.Element {
  wrapperClass = wrapperClass
    ? `"tile__support-section__wrapper" ${wrapperClass}`
    : "tile__support-section__wrapper";

  return jsx(Section, {
    ...props,
    wrapperClass,
  });
}

export interface ListItem {
  title: JSX.Element;
  option: JSX.Element;
}

export interface SupportCardProps extends Props {
  headerSlot: JSX.Element;
  listItems: ListItem[];
}

export function SupportCard(
  { headerSlot, listItems }: SupportCardProps,
): JSX.Element {
  return jsx("div", {
    class: "tile__support__card",
    children: [
      headerSlot,
      listItems.length && jsx("ul", {
        children: listItems.map((listItem) => {
          return jsx("li", {
            class: "tile__support__card__list__item",
            children: [
              listItem.title,
              listItem.option && (
                jsx("div", {
                  children: jsx(OptionIcon, { option: listItem.option }),
                })
              ),
            ],
          });
        }),
      }),
    ],
  });
}

export interface SupportCardHeaderProps extends Props {
  title: string;
  price: string;
  prefixPrice?: JSX.Element;
}

export function SupportCardHeader(
  { title, price, prefixPrice }: SupportCardHeaderProps,
): JSX.Element {
  return jsx("div", {
    class: "tile__support__card__header",
    children: [
      jsx("h2", {
        class: "heading-base tile__support__card__headline",
        children: title,
      }),
      jsx("div", {
        class: "tile__support__card__header__price",
        children: [
          prefixPrice &&
          jsx("div", {
            class: "tile__support__card__header__price__prefix",
            children: prefixPrice,
          }),
          jsx("span", {
            class: "tile__support__card__header__price__amount",
            children: price,
          }),
        ],
      }),
    ],
  });
}
