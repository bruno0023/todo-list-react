import useTask from "./useTask"


interface TaskInfoProp {
    count: number
    countPending: number
    countConclued: number
}

export default function useTaks() {
    const { tasks } = useTask();

    const TasksInfo:TaskInfoProp = {
        count: tasks.length,
        countPending: tasks.filter(task => !task.concluded).length,
        countConclued: tasks.filter(task => task.concluded).length
    };

    return {
        tasks,
        TasksInfo
    };
}