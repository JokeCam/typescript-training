import React, {useState} from 'react';

import TodoListItem from './TodoListItem/TodoListItem';

import './TodoList.less';

function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    function handleChange(event: React.FormEvent<HTMLInputElement>) {
        setInputValue((event.target as HTMLInputElement).value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const tempArr = todoList;
        tempArr.unshift(inputValue);
        setTodoList(tempArr);
        setInputValue('');
    }

    return (
        <div className="todo-list">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="What to do"
                    value={inputValue}
                    onChange={handleChange}
                />
            </form>
            {
                todoList.map((todo, index) => {
                    return <TodoListItem key={index} text={todo} index={index}/>;
                })
            }
        </div>
    );
}

export default TodoList;