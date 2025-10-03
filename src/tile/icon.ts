import type { Props } from "@huuma/ui";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export interface IconProps extends Omit<Props, "children"> {
  class?: string;
  width?: string;
  height?: string;
}

type Option =
  | "false"
  | "true"
  | "optional"
  // deno-lint-ignore ban-types
  | string & {}
  | Exclude<JSX.Element, string>;

interface OptionIconProps extends IconProps {
  option: Option | JSX.Element;
}

export function OptionIcon({ option, ...props }: OptionIconProps): JSX.Element {
  return (option === "true" || option === true)
    ? jsx(IncludedCircleIcon, { ...props })
    : (option === "optional"
      ? jsx(OptionalCircleIcon, { ...props })
      : (option === "false" || option === false)
      ? jsx(ExcludedIcon, { class: "sm:hidden", ...props })
      : option);
}

export function IncludedCircleIcon(props: IconProps): JSX.Element {
  return jsx("svg", {
    viewBox: "0 0 24 24",
    width: "24",
    ...props,
    children: [
      jsx("path", {
        d: "M12,22c-1.383,0 -2.683,-0.262 -3.9,-0.788c-1.217,-0.524 -2.275,-1.237 -3.175,-2.137c-0.9,-0.9 -1.612,-1.958 -2.137,-3.175c-0.525,-1.217 -0.788,-2.517 -0.788,-3.9c0,-1.383 0.263,-2.683 0.788,-3.9c0.525,-1.217 1.237,-2.275 2.137,-3.175c0.9,-0.9 1.958,-1.612 3.175,-2.137c1.217,-0.525 2.517,-0.788 3.9,-0.788c1.383,0 2.683,0.263 3.9,0.788c1.217,0.525 2.275,1.237 3.175,2.137c0.9,0.9 1.613,1.958 2.138,3.175c0.524,1.217 0.787,2.517 0.787,3.9c0,1.383 -0.262,2.683 -0.787,3.9c-0.526,1.217 -1.238,2.275 -2.138,3.175c-0.9,0.9 -1.958,1.613 -3.175,2.137c-1.217,0.526 -2.517,0.788 -3.9,0.788Zm-0,-2c2.233,0 4.125,-0.775 5.675,-2.325c1.55,-1.55 2.325,-3.442 2.325,-5.675c0,-2.233 -0.775,-4.125 -2.325,-5.675c-1.55,-1.55 -3.442,-2.325 -5.675,-2.325c-2.233,0 -4.125,0.775 -5.675,2.325c-1.55,1.55 -2.325,3.442 -2.325,5.675c0,2.233 0.775,4.125 2.325,5.675c1.55,1.55 3.442,2.325 5.675,2.325Z",
      }),
      jsx("circle", { cx: "12", cy: "12", r: "5" }),
    ],
  });
}

export function OptionalCircleIcon(props: IconProps): JSX.Element {
  return jsx("svg", {
    width: "24",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      jsx("path", {
        d: "M12,22c-1.383,0 -2.683,-0.262 -3.9,-0.788c-1.217,-0.524 -2.275,-1.237 -3.175,-2.137c-0.9,-0.9 -1.612,-1.958 -2.137,-3.175c-0.525,-1.217 -0.788,-2.517 -0.788,-3.9c0,-1.383 0.263,-2.683 0.788,-3.9c0.525,-1.217 1.237,-2.275 2.137,-3.175c0.9,-0.9 1.958,-1.612 3.175,-2.137c1.217,-0.525 2.517,-0.788 3.9,-0.788c1.383,0 2.683,0.263 3.9,0.788c1.217,0.525 2.275,1.237 3.175,2.137c0.9,0.9 1.613,1.958 2.138,3.175c0.524,1.217 0.787,2.517 0.787,3.9c0,1.383 -0.262,2.683 -0.787,3.9c-0.526,1.217 -1.238,2.275 -2.138,3.175c-0.9,0.9 -1.958,1.613 -3.175,2.137c-1.217,0.526 -2.517,0.788 -3.9,0.788Zm-0,-2c2.233,0 4.125,-0.775 5.675,-2.325c1.55,-1.55 2.325,-3.442 2.325,-5.675c0,-2.233 -0.775,-4.125 -2.325,-5.675c-1.55,-1.55 -3.442,-2.325 -5.675,-2.325c-2.233,0 -4.125,0.775 -5.675,2.325c-1.55,1.55 -2.325,3.442 -2.325,5.675c0,2.233 0.775,4.125 2.325,5.675c1.55,1.55 3.442,2.325 5.675,2.325Z",
      }),
      jsx("path", {
        d: "M12,7c2.76,0 5,2.24 5,5c0,2.76 -2.24,5 -5,5c-2.76,0 -5,-2.24 -5,-5c-0,-2.76 2.24,-5 5,-5Zm0,2c-1.656,0 -3,1.344 -3,3c0,1.656 1.344,3 3,3c1.656,-0 3,-1.344 3,-3c0,-1.656 -1.344,-3 -3,-3Z",
      }),
    ],
  });
}

export function ExcludedIcon(props: IconProps): JSX.Element {
  return jsx("svg", {
    viewBox: "0 0 24 24",
    class: "tile__excluded-icon",
    width: "24",
    ...props,
    children: [
      jsx("path", {
        d: "M21 21L3 3",
        "stroke-width": "3",
      }),
      jsx("path", {
        d: "M3 21L21 3",
        "stroke-width": "3",
      }),
    ],
  });
}
