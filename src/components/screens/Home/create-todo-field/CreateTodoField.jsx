import React, { useState } from 'react'

const CreateTodoField = ({ setTodos }) => {
    // controlled input hook
    const [title, setTitle] = useState('')

    // add new Todo
    const addTodo = (title) => {
        // take previous state, add new todo and copy the rest 
        setTodos(prev => [
            {
                _id: new Date(),
                title,
                isCompleted: false
            },
            ...prev
        ])
        // clear input field
        setTitle('')
    }


    // input field
    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20'>
            <input
                type="text"
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyPress={e => e.key === 'Enter' && addTodo(title)}
                className='bg-transparent w-full border-none outline-none'
                placeholder='Add a task'
            />
        </div>
    )
}

export default CreateTodoField