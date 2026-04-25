import { cva, type VariantProps } from "class-variance-authority";
import Button from "../components/button";
import InputText from "../components/input-text";

const searchVariants = cva('flex gap-2');

interface SearchProps extends VariantProps<typeof searchVariants> {
    className?: string
}

export default function Search({
    className
}: SearchProps) {
    return (
        <div className={searchVariants({ className })}>
            <InputText className="flex-1" />
            <Button>Adicionar</Button>
        </div>
    );
}