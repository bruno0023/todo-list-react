import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";

const InputTextVariants = cva( ``,
  {
    variants: {
      variant: {
        default: "border border-gray-300 rounded-md",
        secondary: "outline-none border-b border-gray-300 rounded-none",
      },
      size: {
        md: "py-2 px-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    },
  }
);

interface InputTextProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof InputTextVariants> {}

export default function InputText({
  className,
  size,
  disabled,
  variant,
  ...props
}: InputTextProps) {
  return (
    <input
      className={cx(
        InputTextVariants({ size, variant }),
        textVariants(),
        className
      )}
      {...props}
    />
  );
}