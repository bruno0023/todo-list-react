import { useLocalStorage } from 'usehooks-ts';
import { TASK_KEY, type Task } from '../models/task';


export default function useTask() {

    const [tasks, setTasks] = useLocalStorage<Task[]>(TASK_KEY, [])

    function preparedTask(TaskTitle: string) {
        const newTask: Task = {
            id: crypto.randomUUID(),
            title: TaskTitle,
            concluded: false,
            state: 'creating'
        }

        setTasks([...tasks, newTask])
    }

    function updateTask(id: string, taskNewTitle: string) {
        if (!taskNewTitle.trim()) return;
        const taskUpdated = tasks.map((task) => task.id === id ? { ...task, title: taskNewTitle } : task)
        setTasks(taskUpdated)
    }

    function updateStateTask(id: string) {
        const taskConcluedUpdated = tasks.map((task) => task.id === id ? { ...task, concluded: !task.concluded } : task)
        setTasks(taskConcluedUpdated)
    }

    function deleteConcluedTask() {
        const newTaskFilter = tasks.filter(task => !task.concluded)
        setTasks(newTaskFilter)
    }

    function deleteTask(id: string) {
        const newTaskFilter = tasks.filter(task => task.id !== id)
        setTasks(newTaskFilter)
    }

    return {
        tasks,
        preparedTask,
        updateStateTask,
        deleteConcluedTask,
        updateTask,
        deleteTask
    }
}