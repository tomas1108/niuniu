import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

type ButtonProps = {
  block?: boolean;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const buttonVariants = cva(
  "text-xl min-h-[36px] min-w-[142px] rounded-[70px] text-white flex flex-row items-center justify-center gap-2 px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:opacity-90",
  {
    variants: {
      variant: {
        default: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={cn(buttonVariants({}), className)}>
      {children}
    </button>
  );
};

export default Button;
