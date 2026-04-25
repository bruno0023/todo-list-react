import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva('border border-solid border-gray-300 rounded-md ')

interface CardProps extends VariantProps<typeof cardVariants>, React.ComponentProps<'div'> { }

export default function Card({
    className,
    ...props
}: CardProps) {
    return <>
        <div className={cardVariants({ className })} {...props}>
        </div>
    </>
}