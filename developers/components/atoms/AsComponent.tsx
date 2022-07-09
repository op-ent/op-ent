import { forwardRef } from "react";

const AsComponent = forwardRef(
  ({ component, ...attributes }: { component?: React.ElementType }, ref) => {
    const Element = component || "div";
    return <Element ref={ref} {...attributes} />;
  }
) as any;

export default AsComponent;
