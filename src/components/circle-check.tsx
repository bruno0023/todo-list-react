import { cva, type VariantProps } from "class-variance-authority";
import Check from "../assets/icons/check.svg?react";

const circleCheckboxVariants = cva(
  `
  w-6 h-6 flex items-center justify-center
  rounded-full transition-all duration-200
  border cursor-pointer
  `,
  {
    variants: {
      checked: {
        true: "bg-blue-600 border-blue-600",
        false: "bg-white border-gray-300",
      },
    },
    defaultVariants: {
      checked: false,
    },
  }
);

interface CircleCheckboxProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof circleCheckboxVariants> {
  checked: boolean;
}

export default function CircleCheckbox({
  checked,
  ...props
}: CircleCheckboxProps) {


  return (
    <button
      {...props}
      className={circleCheckboxVariants({ checked: checked })}
    >
      {checked && (
        <Check className="w-4 h-4 text-white" strokeWidth={3} />
      )}
    </button>
  );
}