import { Props } from "@huuma/ui";
import { Section } from "../layout/section.tsx";
import { JSX } from "@huuma/ui/jsx-runtime";
import { OptionIcon } from "../icons.tsx";

export interface SupportSectionProps extends Props {
  titleSlot?: JSX.Element;
}

export function SupportSection({ titleSlot, children }: SupportSectionProps) {
  return (
    <Section
      padding="sm"
      maxWidth="7xl"
      titleSlot={titleSlot}
    >
      <div class="tile__support-section__wrapper">
        {children}
      </div>
    </Section>
  );
}

export interface ListItem {
  title: JSX.Element;
  option: JSX.Element;
}

export interface SupportCardProps extends Props {
  headerSlot: JSX.Element;
  listItems: ListItem[];
}

export function SupportCard({ headerSlot, listItems }: SupportCardProps) {
  return (
    <div class="tile__support__card">
      {headerSlot}
      {listItems.length && (
        <ul>
          {listItems.map((listItem) => (
            <li class="tile__support__card__list__item">
              {listItem.title}
              {listItem.option && (
                <div>{<OptionIcon option={listItem.option} />}</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export interface SupportCardHeaderProps extends Props {
  title: string;
  price: string;
  prefixPrice?: JSX.Element;
}

export function SupportCardHeader(
  { title, price, prefixPrice }: SupportCardHeaderProps,
) {
  return (
    <div class="tile__support__card__header">
      <h2 class="heading-base tile__support__card__headline">
        {title}
      </h2>
      <div class="tile__support__card__header__price">
        {prefixPrice && (
          <div class="tile__support__card__header__price__prefix">
            {prefixPrice}
          </div>
        )}
        <span class="tile__support__card__header__price__amount">
          {price}
        </span>
      </div>
    </div>
  );
}
