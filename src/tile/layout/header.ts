import CloseIcon from "@huuma/icons/pixelarticons/close";
import MenuIcon from "@huuma/icons/pixelarticons/menu";
import { $mount } from "@huuma/ui/hooks/lifecycle";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";
import { $signal } from "@huuma/ui/hooks/signal";
import type { Props } from "@huuma/ui";

export interface HeaderProps extends Props {
  bannerSlot?: JSX.Element;
  callToActionSlot?: JSX.Element;
  logoSlot?: JSX.Element;
  navItems?: NavItem[];
}

export function Header(
  { logoSlot, callToActionSlot, children, navItems, bannerSlot }: HeaderProps,
): JSX.Element {
  const open = $signal(false);
  $mount(() => {
    globalThis.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        open.set(false);
      }
    });
  });

  function closeMenu() {
    open.set(false);
    return false;
  }

  return [
    bannerSlot &&
    jsx("nav", {
      class: "tile__banner",
      children: jsx("div", {
        class: "tile__banner__wrapper",
        children: bannerSlot,
      }),
    }),
    jsx("header", {
      class: open.get() ? "tile__header tile__header--open" : "tile__header",
      children: jsx("nav", {
        class: "tile__header__wrapper",
        children: [
          logoSlot &&
          jsx("div", { class: "tile__header__logo", children: logoSlot }),
          navItems?.length
            ? jsx(NavItems, {
              closeFn: closeMenu,
              navItems: navItems,
              callToActionSlot: callToActionSlot,
            })
            : children,
          jsx("button", {
            class: "tile__header__navigation__menu__button",
            type: "button",
            "on-click": () => {
              open.set(!open.get());
            },
            children: open.get()
              ? jsx(CloseIcon, { width: "32px", height: "32px" })
              : jsx(MenuIcon, { width: "32px", height: "32px" }),
          }),
        ],
      }),
    }),
  ];
}

interface NavLink {
  type: "link";
  text: string;
  href: string;
  rel: string;
  class: string;
}

type NavItem = NavLink;

interface NavItemsProps extends Props {
  navItems: NavItem[];
  callToActionSlot?: JSX.Element;
  closeFn: () => void;
}

function NavItems({ navItems, callToActionSlot, closeFn }: NavItemsProps) {
  return jsx("ul", {
    class: "tile__header__navigation",
    children: [
      navItems.map((navItem) => {
        return jsx("li", {
          children: jsx("a", {
            rel: navItem.rel,
            href: navItem.href,
            class: "font-medium underline",
            "on-click": closeFn,
            children: navItem.text,
          }),
        });
      }),
      callToActionSlot && jsx("li", { children: callToActionSlot }),
    ],
  });
}
