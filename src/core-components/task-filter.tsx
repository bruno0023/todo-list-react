import Badge from "../components/badge";
import Button from "../components/button";

//Hooks
import useTaks from "../hooks/useTasks";

export type filterProp = 'all' | 'pending' | 'completed';

export type TaskFilterProps = {
    filter: filterProp
    setFilter: (value: filterProp) => void
}

export default function TaskFilter({
    filter,
    setFilter
}: TaskFilterProps) {

    const { TasksInfo } = useTaks()


    function handleSetTaskFilter(state: filterProp) {
        setFilter(state)
    }

    return <>
        <div className="flex justify-between gap-4 p-2">
            <Button
                onClick={() => handleSetTaskFilter('all')}
                variant={filter === 'all' ? 'active' : 'secondary'}
                className="w-full gap-2">
                <p>Todas</p>
                <Badge value={TasksInfo.count} />
            </Button>
            <Button
                onClick={() => handleSetTaskFilter('pending')}
                variant={filter === 'pending' ? 'active' : 'secondary'}
                className="w-full gap-2">
                <p>Pendentes</p>
                <Badge value={TasksInfo.countPending} />
            </Button>
            <Button
                onClick={() => handleSetTaskFilter('completed')}
                variant={filter === 'completed' ? 'active' : 'secondary'}
                className="w-full gap-2">
                <p>Concluidas</p>
                <Badge value={TasksInfo.countConclued} />
            </Button>
        </div>
    </>

}