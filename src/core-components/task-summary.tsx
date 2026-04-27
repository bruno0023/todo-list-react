import Card from "../components/card";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";

//Hooks
import useTask from "../hooks/useTask";
import useTaks from "../hooks/useTasks";

export default function TaskSummary() {

    const { TasksInfo } = useTaks();
    const {deleteConcluedTask} = useTask()

    function handleDeleteConcluedTask() {
        deleteConcluedTask();
    }

    return (
        <Card className="flex items-center justify-between p-4">
            <Text variant="secondary">
                {TasksInfo.countPending} de {TasksInfo.count} tarefas restantes
            </Text>

            <button
                onClick={handleDeleteConcluedTask}
                type="button"
                className="
                    flex gap-4 px-5 py-2
                    border border-solid border-gray-300  rounded-md
                    cursor-pointer
                    transition
                    group
                "
            >
                <TrashIcon className="transition text-red-300 group-hover:text-red-500" />

                <Text
                    variant="danger"
                    className="transition group-hover:text-red-600 flex items-center justify-center"
                >
                    Limpar concluídas
                </Text>
            </button>
        </Card>
    );
}