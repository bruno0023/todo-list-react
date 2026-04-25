import Button from "../components/button";
import Card from "../components/card";

import CircleCheckbox from "../components/circle-check";
import InputText from "../components/input-text";
import Text from "../components/text";
import Taskitem from "../core-components/task-item"
import Icon from "../components/icon";

//iCONES
import TrashIcon from "../assets/icons/trash.svg?react";
import Pincel from '../assets/icons/pencil.svg?react';
import TaskFilter from "../core-components/task-filter";

export default function PageComponents() {
    return <>

            <div className="flex items-center gap-2">
                <Text variant="heading">Titulo</Text>
                <Text variant="primary">Primario</Text>
                <Text variant="secondary">Secundario</Text>
                <Text variant="danger">Danger</Text>
            </div>

            <div className="flex gap-2">
                <Button variant="primary">Adicionar</Button>
            </div>

            <div className="flex flex-col gap-2">
                <InputText />
            </div>

            <div className="flex gap-2">
                <CircleCheckbox />
                <CircleCheckbox />
                <CircleCheckbox />
            </div>

            <div>
                <TaskFilter />
            </div>

            <div>
                <Card className="w-full h-10" />
                <Card className="w-full h-10" />
                <Card className="w-full h-10" />
            </div>

            <div className="flex gap-2">
                <Icon icon={TrashIcon} />
                <Icon icon={Pincel} />
            </div>

            <div>
                <Taskitem>Levar o cachorro pra passear</Taskitem>
            </div>

    </>
}