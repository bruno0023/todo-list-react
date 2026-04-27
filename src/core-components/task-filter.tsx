import Badge from "../components/badge";
import Button from "../components/button";

//Hooks
import useTaks from "../hooks/useTasks";

export default function TaskFilter() {

    const { TasksInfo } = useTaks()

    return <>
        <div className="flex justify-between gap-4 p-2">
            <Button variant="secondary" className="w-full gap-2">
                <p>Todas</p>
                <Badge value={TasksInfo.count} />
            </Button>
            <Button variant="secondary" className="w-full gap-2">
                <p>Pendentes</p>
                <Badge value={TasksInfo.countPending} />
            </Button>
            <Button variant="secondary" className="w-full gap-2">
                <p>Concluidas</p>
                <Badge value={TasksInfo.countConclued} />
            </Button>
        </div>
    </>

}