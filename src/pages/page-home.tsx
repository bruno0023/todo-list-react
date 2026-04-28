
import { useState } from "react";
import Search from "../core-components/search";
import TaskFilter from "../core-components/task-filter";
import TaskList from "../core-components/task-list";
import TaskSummary from "../core-components/task-summary";

import type { filterProp } from "../core-components/task-filter";

export default function PageComponents() {

    const [taskFilter, setTaskFilter] = useState<filterProp>('all')

    return (
        <>
            <Search />

            <TaskFilter
                filter={taskFilter}
                setFilter={setTaskFilter}
            />

            <TaskList
                filter={taskFilter}
            />

            <TaskSummary />
        </>
    )
}