import { JSX } from "@huuma/ui/jsx-runtime";
import { Props } from "@huuma/ui";

import { Section, SectionProps } from "../layout/section.tsx";
import { Table, TableCell, TableCellProps, TableRow } from "../table.tsx";
import { OptionIcon } from "../icons.tsx";

interface PricingSectionProps extends SectionProps {
  appendixSlot?: JSX.Element;
  legendSlot?: JSX.Element;
}

export function PricingSection(
  {
    titleSlot,
    children,
    appendixSlot,
    legendSlot,
    wrapperClass,
    class: className,
    padding,
  }: PricingSectionProps,
) {
  return (
    <Section
      id="pricing"
      padding={padding ?? "lg"}
      maxWidth="7xl"
      titleSlot={titleSlot}
      class={className}
      wrapperClass={wrapperClass}
    >
      <Table>{children}</Table>
      {appendixSlot && (
        <div class="tetra__pricing__appendix">{appendixSlot}</div>
      )}
      {legendSlot && <div class="tetra__pricing__legend">{legendSlot}</div>}
    </Section>
  );
}

export const PricingTableRow = TableRow;

interface PricingTableCellProps extends TableCellProps {
  tableHeader?: boolean;
  optionSlot?: JSX.Element;
}
export function PricingTableCell(
  { tableHeader, optionSlot, children, ...rest }: PricingTableCellProps,
) {
  if (tableHeader) {
    const className = "tetra__pricing__table__cell--header";
    rest.class = rest.class ? [rest.class, className].join(" ") : className;
  }

  return (
    <TableCell {...rest}>
      {optionSlot ? <OptionIcon option={optionSlot} /> : children}
    </TableCell>
  );
}

export interface PricingTableCellHeader extends PricingTableCellProps {
  title?: JSX.Element;
  additionalInfo?: JSX.Element;
  price?: JSX.Element;
}

export function PricingFeatureGroup({ children }: Props) {
  return <div class="tetra__pricing__feature-group">{children}</div>;
}

export function PricingFeatureGroupTitle({ children }: Props) {
  return (
    <h3 class="tetra__pricing__feature-group__title heading-sm">{children}</h3>
  );
}
