import type { Props } from "@huuma/ui";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

interface FooterProps extends Props {
  legalSlot?: JSX.Element;
  logoSlot?: JSX.Element;
}
export function Footer(
  { legalSlot, logoSlot, children }: FooterProps,
): JSX.Element {
  return jsx("footer", {
    class: "tile__footer",
    children: [
      jsx("div", {
        class: "tile__footer_wrapper",
        children: [
          jsx("div", {
            class: "tile__footer__grid",
            children: [
              jsx("div", {
                class: "tile__footer_col__logo",
                children: logoSlot,
              }),
              jsx("div", {
                class: "tile__footer_col__nav",
                children: children,
              }),
            ],
          }),
          legalSlot && (
            jsx("div", { class: "tile__footer__legal", children: legalSlot })
          ),
        ],
      }),
    ],
  });
}
