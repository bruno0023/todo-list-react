import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

export const textVariants = cva("font-sans text-gray-400", {
    variants: {
        variant: {
            "heading": "text-xl font-semibold text-gray-900",
            "primary": "text-base text-gray-800 ",
            "secondary": "text-base text-gray-500 ",
            "danger": "text-sm text-red-300",
        }
    },
    defaultVariants: {
        variant: "primary"
    }
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export default function Text({
    as = 'span',
    children,
    className,
    variant,
    ...props
}: TextProps) {
    return (
        React.createElement(
            as,
            {
                className: textVariants({ variant, className }),
                ...props
            },
            children
        )
    )
}