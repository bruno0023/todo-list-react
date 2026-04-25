
import Search from "../core-components/search";
import TaskFilter from "../core-components/task-filter";
import TaskList from "../core-components/task-list";
import TaskSummary from "../core-components/task-summary";


export default function PageComponents() {
    return <>
        <Search />
        <TaskFilter />
        <TaskList />
        <TaskSummary />
    </>
}