import React from 'react';

import './TodoListItem.less';

interface TodoItem {
    text: string,
    index: number,
}

function TodoListItem(props: TodoItem) {
    return (
        <div className='todo-list-item'>
            <p>{props.index}. </p>
            <p>{props.text}</p>
        </div>
    );
}

export default TodoListItem;