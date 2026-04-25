import React from 'react'
import Card from '../components/card';
import CircleCheckbox from '../components/circle-check';

import TrashIcon from "../assets/icons/trash.svg?react";
import Pincel from '../assets/icons/pencil.svg?react';
import Xicon from '../assets/icons/x.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';
import ButtonIcon from '../components/button-icon';

type TaskItemProps = {
  children: string
}


export default function Taskitem({
  children,
}: TaskItemProps) {

  const [isEditing, setIsEditing] = React.useState(false);

  function handleEdit() {
    setIsEditing((prev) => !prev);
  }


  return (
    !isEditing ? (
      <Card className="flex items-center gap-4 w-full h-15 px-4 py-1">
        <CircleCheckbox />
        <h1 className='flex flex-1'>{children}</h1>
        <ButtonIcon IconComponent={Pincel} variant="edit" onClick={handleEdit}/>
        <ButtonIcon IconComponent={TrashIcon} variant="delete"/>
      </Card>
    ) : (
      <Card className="flex items-center gap-4 w-full h-15 px-4 py-1">
        <input type="text" className='flex flex-1 border-b border-solid border-gray-400 outline-none p-1' />
        <ButtonIcon IconComponent={Xicon} variant="cancel" onClick={handleEdit}/>
        <ButtonIcon IconComponent={CheckIcon} variant="confirm"/>
      </Card>
    )

  );
}