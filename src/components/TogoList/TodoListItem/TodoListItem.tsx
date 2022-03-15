import React from 'react';
import PropTypes from 'prop-types';

import './TodoListItem.less';

interface TodoItem {
    text: string,
    index: number,
}

function TodoListItem(props: TodoItem) {
    return (
        <div className="todo-list-item">
            <p>{props.index}. </p>
            <p>{props.text}</p>
        </div>
    );
}

TodoListItem.propTypes = {
    text: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
};

export default TodoListItem;