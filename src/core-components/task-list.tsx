import Taskitem from "./task-item";

//Hooks
import useTasks from '../hooks/useTask'


export default function TaskList() {

    const { tasks } = useTasks()

    return <>
        <div>
            {tasks.map(task => (
                <Taskitem key={task.id} task={task} />
            ))}
        </div>

    </>;
}