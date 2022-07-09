import { forwardRef } from "react";
import AsComponent from "./AsComponent";

export type ButtonProps = {
  component?: React.ElementType;
  variant: "primary" | "secondary" | "tertiary" | "outline" | "link";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ component, variant = "primary", children, ...attributes }, ref) => {
    return (
      <AsComponent
        component={component || "button"}
        {...attributes}
        ref={ref}
        className="bg-red-500"
      >
        {children}
      </AsComponent>
    );
  }
);

export default Button;
