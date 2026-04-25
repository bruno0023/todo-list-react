import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';

export const containerVariants = cva('mx-auto shadow-[0_-4px_20px_rgba(0,0,0,0.1)] rounded-lg p-5', {
    variants: {
        size: {
            md: "max-w-2xl w-full",
        }
    },
    defaultVariants: {
        size: 'md'
    }
})


interface ContainerProps extends VariantProps<typeof containerVariants> {
    as?: React.ElementType
    children: React.ReactNode
    className?: string
}

export default function Container({
    as = 'div',
    size,
    children,
    className,
    ...props
}: ContainerProps) {
    return React.createElement(
        as, {
        className: containerVariants({ size, className }),
        ...props
    },
    children
    )
}