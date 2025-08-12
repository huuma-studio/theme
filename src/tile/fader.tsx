import { jsx } from "@huuma/ui/jsx-runtime";
import type { Props } from "@huuma/ui";

export function Fader({ children }: Props) {
  return jsx("ul", { children, class: "tetra__fader" });
}

interface FaderItemProps extends Props {
  delay?: number;
  duration?: number;
}

export function FaderItem({ children, delay, duration }: FaderItemProps) {
  return jsx("li", {
    style: `--animation-duration: ${duration ?? 10}s; --animation-delay: ${
      delay ?? 0
    }s;`,
    class: "tetra__fader__items",
    children: (Array.isArray(children) ? children : [children]).map(
      (child, i) => {
        return jsx("span", {
          class: `tetra__fader__item tetra__fader__item--${i + 1}`,
          children: child,
        });
      },
    ),
  });
}
