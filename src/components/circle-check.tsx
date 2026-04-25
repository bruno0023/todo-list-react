import { useState } from "react";
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
  extends VariantProps<typeof circleCheckboxVariants> {
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

export default function CircleCheckbox({
  checked = false,
}: CircleCheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
  };

  return (
    <button
      onClick={handleToggle}
      className={circleCheckboxVariants({ checked: isChecked })}
    >
      {isChecked && (
        <Check className="w-4 h-4 text-white" strokeWidth={3} />
      )}
    </button>
  );
}