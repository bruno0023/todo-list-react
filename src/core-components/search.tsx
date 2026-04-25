import { cva, type VariantProps } from "class-variance-authority";
import Button from "../components/button";
import InputText from "../components/input-text";

//HOOKS
import useTask  from '../hooks/useTask';
import { useState } from "react";


const searchVariants = cva('flex gap-2');

interface SearchProps extends VariantProps<typeof searchVariants> {
    className?: string
}

export default function Search({
    className
}: SearchProps) {

    const [taskTitle, setTaskTitle] = useState('');
    const { preparedTask } = useTask();


    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value)
    }

    function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!taskTitle.trim()) return;
        preparedTask(taskTitle)
        setTaskTitle('')
    }

    return (
        <form onSubmit={handleSaveTask} className={searchVariants({ className })}>
            <InputText onChange={handleChangeTaskTitle} className="flex-1" value={taskTitle}/>
            <Button type="submit">Adicionar</Button>
        </form>
    );
}