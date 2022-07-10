import clsx from "clsx";
import { forwardRef } from "react";
import AsComponent from "./AsComponent";

type Variant = "solid" | "outline" | "ghost" | string;
type Color = "tomato" | "blue" | "sky" | "gray" | "slate" | string;

export type ButtonProps = {
  component?: React.ElementType;
  variant?: Variant;
  color?: Color;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { component, color = "tomato", variant = "solid", children, ...attributes },
    ref
  ) => {
    const variantClass = (
      {
        solid: {
          tomato:
            "text-white bg-tomatoAuto-9 hover:bg-tomatoAuto-10 border border-tomatoAuto-9 hover:border-tomatoAuto-10",
          blue: "text-white bg-blueAuto-9 hover:bg-blueAuto-10 border border-blueAuto-9 hover:border-blueAuto-10",
          sky: "text-black bg-skyAuto-9 hover:bg-skyAuto-10 border border-skyAuto-9 hover:border-skyAuto-10",
          gray: "text-white bg-grayAuto-9 hover:bg-grayAuto-10 border border-grayAuto-9 hover:border-grayAuto-10",
          slate:
            "text-white bg-slateAuto-9 hover:bg-slateAuto-10 border border-slateAuto-9 hover:border-slateAuto-10",
        },
        outline: {
          tomato:
            "bg-tomatoAuto-1 hover:bg-tomatoAuto-2 border border-tomatoAuto-7 hover:border-tomatoAuto-8 text-tomatoAuto-11",
          blue: "bg-blueAuto-1 hover:bg-blueAuto-2 border border-blueAuto-7 hover:border-blueAuto-8 text-blueAuto-11",
          sky: "bg-skyAuto-1 hover:bg-skyAuto-2 border border-skyAuto-7 hover:border-skyAuto-8 text-skyAuto-11",
          gray: "bg-grayAuto-1 hover:bg-grayAuto-2 border border-grayAuto-7 hover:border-grayAuto-8 text-grayAuto-11",
          slate:
            "bg-slateAuto-1 hover:bg-slateAuto-2 border border-slateAuto-7 hover:border-slateAuto-8 text-slateAuto-11",
        },
        ghost: {
          tomato:
            "bg-tomatoAuto-4 hover:bg-tomatoAuto-5 text-tomatoAuto-11 border border-tomatoAuto-4 hover;border-tomatoAuto-5",
          blue: "bg-blueAuto-4 hover:bg-blueAuto-5 text-blueAuto-11 border border-blueAuto-4 hover;border-blueAuto-5",
          sky: "bg-skyAuto-4 hover:bg-skyAuto-5 text-skyAuto-11 border border-skyAuto-4 hover;border-skyAuto-5",
          gray: "bg-grayAuto-4 hover:bg-grayAuto-5 text-grayAuto-11 border border-grayAuto-4 hover;border-grayAuto-5",
          slate:
            "bg-slateAuto-4 hover:bg-slateAuto-5 text-slateAuto-11 border border-slateAuto-4 hover;border-slateAuto-5",
        },
      } as Record<Variant, Record<Color, string>>
    )[variant][color];

    const focusClass = (
      {
        tomato: "focus:ring-[3px] focus:ring-tomatoAuto-7",
        blue: "focus:ring-[3px] focus:ring-blueAuto-7",
        sky: "focus:ring-[3px] focus:ring-skyAuto-7",
        gray: "focus:ring-[3px] focus:ring-grayAuto-7",
        slate: "focus:ring-[3px] focus:ring-slateAuto-7",
      } as Record<Color, string>
    )[color];

    return (
      <AsComponent
        component={component || "button"}
        {...attributes}
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold transition-colors",
          variantClass,
          focusClass
        )}
      >
        {children}
      </AsComponent>
    );
  }
);

export default Button;
