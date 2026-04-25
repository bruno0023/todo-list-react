import Badge from "../components/badge";
import Button from "../components/button";

export default function TaskFilter() {

    return <>
        <div className="flex justify-between gap-4 p-2 border border-solid border-gray-300">
            <Button variant="secondary" className="w-full gap-2">
                <p>Todas</p>
                <Badge value={3} />
            </Button>
            <Button variant="secondary" className="w-full gap-2">
                <p>Pendentes</p>
                <Badge value={0} />
            </Button>
            <Button variant="secondary" className="w-full gap-2">
                <p>Concluidas</p>
                <Badge value={0} />
            </Button>
        </div>
    </>

}