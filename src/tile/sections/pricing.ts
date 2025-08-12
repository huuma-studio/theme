import { type JSX, jsx } from "@huuma/ui/jsx-runtime";
import type { Props } from "@huuma/ui";

import { Table, TableCell, type TableCellProps, TableRow } from "../table.ts";
import { Section, type SectionProps } from "../layout/section.ts";
import { OptionIcon } from "../icons.ts";

export interface PricingSectionProps extends SectionProps {
  appendixSlot?: JSX.Element;
  legendSlot?: JSX.Element;
}

export function PricingSection(
  {
    children,
    appendixSlot,
    legendSlot,
    ...props
  }: PricingSectionProps,
): JSX.Element {
  return jsx(Section, {
    ...props,
    children: [
      jsx(Table, { children }),
      appendixSlot &&
      jsx("div", { class: "tile__pricing__appendix", children: appendixSlot }),
      legendSlot &&
      jsx("div", { class: "tile__pricing__legend", children: legendSlot }),
    ],
  });
}

export const PricingTableRow = TableRow;

export interface PricingTableCellProps extends TableCellProps {
  tableHeader?: boolean;
  optionSlot?: JSX.Element;
}
export function PricingTableCell(
  { tableHeader, optionSlot, class: className, children, ...props }:
    PricingTableCellProps,
): JSX.Element {
  if (tableHeader) {
    "tile__pricing__table__cell--header";
    className = className
      ? [className, "tile__pricing__table__cell--header"].join(" ")
      : "tile__pricing__table__cell--header";
  }

  return jsx(TableCell, {
    ...props,
    children: optionSlot ? jsx(OptionIcon, { option: optionSlot }) : children,
  });
}

export interface PricingTableCellHeader extends PricingTableCellProps {
  title?: JSX.Element;
  additionalInfo?: JSX.Element;
  price?: JSX.Element;
}

export function PricingFeatureGroup({ children }: Props): JSX.Element {
  return jsx("div", { class: "tile__pricing__feature-group", children });
}

export function PricingFeatureGroupTitle({ children }: Props): JSX.Element {
  return jsx("h3", {
    class: "tile__pricing__feature-group__title heading-sm",
    children,
  });
}
