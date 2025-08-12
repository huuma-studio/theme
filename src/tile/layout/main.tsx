import type { Props } from "@huuma/ui";
import { jsx } from "@huuma/ui/jsx-runtime";

export function Main({ children, ...props }: Props) {
  return jsx("main", { class: "tile__main", ...props, children });
}
