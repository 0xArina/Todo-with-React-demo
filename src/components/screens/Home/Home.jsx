import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './create-todo-field/CreateTodoField'

// db array
const data = [
    {
        _id: 'dfgs3',
        title: 'Wash the dishes',
        isCompleted: false,

    },
    {
        _id: 'sdg24',
        title: 'Do laundry',
        isCompleted: false,

    },
    {
        _id: 'fe3k5',
        title: 'Get groceries',
        isCompleted: false,

    },
]

// home component
const Home = () => {
    // hook useState to change state of data
    const [todos, setTodos] = useState(data)

    // change Todo by id
    const changeTodo = (id) => {
        // duplicate todos
        const copy = [...todos]
        // search for the current by id 
        const current = copy.find(t => t._id === id)
        // change current isCompleted bool 
        current.isCompleted = !current.isCompleted
        // rewrite it 
        setTodos(copy)
    }

    // remove Todo by id
    const removeTodo = (id) => {
        // copy todos, filter and leave todos with id that doesnt equal current id 
        setTodos([...todos].filter(t => t._id !== id))
    }


    return (
        // db iteration and add a fiels for typing new todos
        <div className=' text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-4'>Todo with React demo</h1>
            {todos.map(todo => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                />
            ))}
            <CreateTodoField setTodos={setTodos} />
        </div>
    )
}

export default Home