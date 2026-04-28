import Taskitem from "./task-item";

//Hooks
import useTasks from '../hooks/useTask'

type TaskListProps = {
    filter: 'all' | 'pending' | 'completed'
}

export default function TaskList({
    filter
}: TaskListProps) {

    const { tasks } = useTasks()
    const filteredTask = tasks.filter((task) => {
        if (filter === 'pending') return !task.concluded
        if (filter === 'completed') return task.concluded
        return true
    })


    return <>
        <div>
            {filteredTask.map(taskFiltered => (
                <Taskitem key={taskFiltered.id} task={taskFiltered} />
            ))}
        </div>

    </>;
}