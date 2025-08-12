import type { Props } from "@huuma/ui";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export function Main({ children, ...props }: Props): JSX.Element {
  return jsx("main", { class: "tile__main", ...props, children });
}
