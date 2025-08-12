import CloseIcon from "@huuma/icons/pixelarticons/close";
import MenuIcon from "@huuma/icons/pixelarticons/menu";
import { $mount } from "@huuma/ui/hooks/lifecycle";
import type { JSX } from "@huuma/ui/jsx-runtime";
import { $signal } from "@huuma/ui/hooks/signal";
import { Props } from "@huuma/ui";

export interface HeaderProps extends Props {
  bannerSlot?: JSX.Element;
  callToActionSlot?: JSX.Element;
  logoSlot?: JSX.Element;
  navItems?: NavItem[];
}

export function Header(
  { logoSlot, callToActionSlot, children, navItems, bannerSlot }: HeaderProps,
) {
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

  return (
    <>
      {bannerSlot && (
        <nav class="tetra__banner">
          <div class="tetra__banner__wrapper">{bannerSlot}</div>
        </nav>
      )}
      <header
        class={open.get()
          ? "tetra__header tetra__header--open"
          : "tetra__header"}
      >
        <nav class="tetra__header__wrapper">
          {logoSlot && <div class="tetra__header__logo">{logoSlot}</div>}
          {navItems?.length
            ? (
              <NavItems
                closeFn={closeMenu}
                navItems={navItems}
                callToActionSlot={callToActionSlot}
              />
            )
            : children}
          <button
            class="tetra__header__navigation__menu__button"
            type="button"
            on-click={() => {
              open.set(!open.get());
            }}
          >
            {open.get()
              ? <CloseIcon width="32px" height="32px" />
              : <MenuIcon width="32px" height="32px" />}
          </button>
        </nav>
      </header>
    </>
  );
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
  return (
    <ul class="tetra__header__navigation">
      {navItems.map((navItem) => (
        <li>
          <a
            rel={navItem.rel}
            href={navItem.href}
            class="font-medium underline"
            on-click={closeFn}
          >
            {navItem.text}
          </a>
        </li>
      ))}
      {callToActionSlot && <li>{callToActionSlot}</li>}
    </ul>
  );
}
