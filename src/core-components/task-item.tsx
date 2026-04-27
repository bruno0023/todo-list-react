import React, { useState } from 'react'
import Card from '../components/card';
import CircleCheckbox from '../components/circle-check';

import TrashIcon from "../assets/icons/trash.svg?react";
import Pincel from '../assets/icons/pencil.svg?react';
import Xicon from '../assets/icons/x.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';
import ButtonIcon from '../components/button-icon';

//HOOKS
import useTask from '../hooks/useTask';
import type { Task } from '../models/task';

interface TasksItemProps {
  task: Task;
}


export default function TaskItem({ task }: TasksItemProps) {

  const [taskTitle, setTaskTitle] = useState(task.title || '')
  const [isEditing, setIsEditing] = useState(false);
  const { deleteTask, updateTask, updateStateTask } = useTask()

  function handleEdit() {
    setIsEditing(true);
  }

  function handleExitEdit() {
    setTaskTitle(task.title)
    setIsEditing(false);
  }

  function handleUpdateStateTask(id: string) {
    updateStateTask(id)
  }

  function handleConfirmUpdateTask(e: React.FormEvent<HTMLFormElement>, id: string, newTaskTitle: string) {
    e.preventDefault()
    updateTask(id, newTaskTitle)
    setIsEditing(false)
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value)
  }

  function handleDeleteTaks(id: string) {
    deleteTask(id)
  }


  return (
    !isEditing ? (

      <Card key={task.id} className="flex items-center gap-4 w-full h-15 px-4 py-1">
        <CircleCheckbox checked={task.concluded} onClick={() => handleUpdateStateTask(task.id)}/>
        <h1 className={`flex flex-1 ${task.concluded ? 'line-through text-gray-400' : ''}`}>{task.title}</h1>
        <ButtonIcon
          IconComponent={Pincel}
          variant="edit"
          onClick={handleEdit} />
        <ButtonIcon
          IconComponent={TrashIcon}
          variant="delete"
          onClick={() => handleDeleteTaks(task.id)} />
      </Card>

    ) : (

      <form onSubmit={(e) => handleConfirmUpdateTask(e, task.id, taskTitle)}>
        <Card key={task.id} className="flex items-center gap-4 w-full h-15 px-4 py-1">
          <input
            type="text"
            className='flex flex-1 border-b border-solid border-gray-400 outline-none p-1'
            autoFocus
            onChange={(e) => handleChangeTaskTitle(e)}
            value={taskTitle} />
          <ButtonIcon
            type='button'
            IconComponent={Xicon}
            variant="cancel"
            onClick={handleExitEdit} />
          <ButtonIcon
            type='submit'
            IconComponent={CheckIcon}
            variant="confirm" />
        </Card>
      </form>

    ))


}