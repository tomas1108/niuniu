import { cva } from "class-variance-authority";
import { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

type TextProps = PropsWithChildren & HTMLAttributes<HTMLSpanElement>;

const textVariants = cva("font-semibold");

const Text: React.FC<TextProps> = ({ children, className, ...props }) => {
  return (
    <span {...props} className={cn(textVariants, className)}>
      {children}
    </span>
  );
};

const Typography = {} as any;

Typography.Text = Text;

export default Typography;
