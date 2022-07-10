import clsx from "clsx";
import { forwardRef } from "react";
import AsComponent from "./AsComponent";

type Variant = "solid" | "outline" | "ghost" | string;
type Color =
  | "tomato"
  | "red"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "indigo"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "green"
  | "grass"
  | "orange"
  | "brown"
  | "sky"
  | "mint"
  | "lime"
  | "yellow"
  | "amber"
  | "gray"
  | "mauve"
  | "slate"
  | "sage"
  | "olive"
  | "sand"
  | "gold"
  | "bronze"
  | string;

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
        solid: `text-white bg-${color}-9 hover:bg-${color}-10 border border-${color}-9 hover:border-${color}-10`,
        outline: `bg-${color}-1 hover:bg-${color}-2 border border-${color}-7 hover:border-${color}-8 text-${color}-11`,
        ghost: `bg-${color}-4 hover:bg-${color}-5 text-${color}-11 border border-${color}-4 hover;border-${color}-5`,
      } as Record<Variant, string>
    )[variant];

    const textColorClass = ((color: Color, variant: Variant) => {
      if (variant !== "solid") {
        return "";
      }
      if ("sky mint lime yellow amber".includes(color)) {
        return "text-black";
      }
      return "text-white";
    })(color, variant);

    const focusClass = `focus:ring-2 focus:ring-${color}-7 focus:outline-none`;

    return (
      <AsComponent
        component={component || "button"}
        {...attributes}
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold transition-colors",
          variantClass,
          textColorClass,
          focusClass
        )}
      >
        {children}
      </AsComponent>
    );
  }
);

export default Button;
