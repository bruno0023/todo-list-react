import Icon from "../components/icon";
import { cva, cx, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
    'rounded transition-colors cursor-pointer',
    {
        variants: {
            variant: {
                edit: 'text-gray-400 hover:text-blue-500',
                delete: 'text-gray-400 hover:text-red-500',
                confirm: 'text-gray-400 hover:text-green-500',
                cancel: 'text-gray-400 hover:text-gray-700',
            }
        },
        defaultVariants: {
            variant: 'edit'
        }
    }
);

interface ButtonIconProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function ButtonIcon({
    IconComponent,
    className,
    variant,
    ...props
}: ButtonIconProps) {
    return <>
        <button {...props} className={cx(buttonVariants({ variant }), className)}>
            <Icon icon={IconComponent} />
        </button>
    </>
}