import type { Props } from "@huuma/ui";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export function Table({ children }: Props) {
  return jsx("div", { class: "tile__table", children });
}

export interface TableRowProps extends Props {
  tableHeader?: boolean;
  class?: string;
}

export function TableRow(
  { class: className, children, tableHeader }: TableRowProps,
): JSX.Element {
  const classList = ["tile__table__row"];
  if (tableHeader) {
    classList.push("tile__table__row--header");
  }
  if (className) {
    classList.push(className);
  }
  return jsx("div", { class: classList.join(" "), children });
}

export interface TableCellProps extends Props {
  class?: string;
}

export function TableCell(
  { children, class: className }: TableCellProps,
): JSX.Element {
  const classList = ["tile__table__cell"];
  if (className) {
    classList.push(className);
  }
  return jsx("div", { class: classList.join(" "), children });
}
