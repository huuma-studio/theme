import type { Props } from "@huuma/ui";
import { jsx } from "@huuma/ui/jsx-runtime";

export function Table({ children }: Props) {
  return jsx("div", { class: "tetra__table", children });
}

export interface TableRowProps extends Props {
  tableHeader?: boolean;
  class?: string;
}

export function TableRow(
  { class: className, children, tableHeader }: TableRowProps,
) {
  const classList = ["tetra__table__row"];
  if (tableHeader) {
    classList.push("tetra__table__row--header");
  }
  if (className) {
    classList.push(className);
  }
  return jsx("div", { class: classList.join(" "), children });
}

export interface TableCellProps extends Props {
  class?: string;
}

export function TableCell({ children, class: className }: TableCellProps) {
  const classList = ["tetra__table__cell"];
  if (className) {
    classList.push(className);
  }
  return jsx("div", { class: classList.join(" "), children });
}
