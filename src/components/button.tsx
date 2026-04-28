import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
    "inline-flex items-center justify-center px-4 py-2 transition cursor-pointer font-medium rounded-sm",
    {
        variants: {
            variant: {
                primary: "bg-blue-500 text-white",
                secondary: "hover:bg-gray-300",
                active: "bg-blue-600 text-white shadow-md"
            },
            size: {
                md: "text-base px-4 py-2",
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        }
    }
);

interface ButtonProps
    extends VariantProps<typeof buttonVariants>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export default function Button({
    children,
    className,
    variant,
    size,
    ...props
}: ButtonProps) {
    return (
        <button
            className={buttonVariants({ variant, size, className })}
            {...props}
        >
            {children}
        </button>
    );
}