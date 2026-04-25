import { useLocalStorage } from 'usehooks-ts';
import { TASK_KEY, type Task } from '../models/task';


export default function useTask() {

    const [tasks, setTasks] = useLocalStorage<Task[]>(TASK_KEY, [])

    function preparedTask(TaskTitle: string) {
        const newTask: Task = {
            id: crypto.randomUUID(),
            title: TaskTitle,
            concluded: 'created'
        }

        setTasks([...tasks, newTask] )
    }

    return {
        tasks,
        preparedTask
    }
}