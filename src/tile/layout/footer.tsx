import { Props } from "@huuma/ui";
import { JSX } from "@huuma/ui/jsx-runtime";

interface FooterProps extends Props {
  legalSlot?: JSX.Element;
  logoSlot?: JSX.Element;
}
export function Footer({ legalSlot, logoSlot, children }: FooterProps) {
  return (
    <footer class="tetra__footer">
      <div class="tetra__footer_wrapper">
        <div class="tetra__footer__grid">
          <div class="tetra__footer_col__logo">{logoSlot}</div>
          <div class="tetra__footer_col__nav">{children}</div>
        </div>
        {legalSlot && (
          <div class="tetra__footer__legal">
            {legalSlot}
          </div>
        )}
      </div>
    </footer>
  );
}
