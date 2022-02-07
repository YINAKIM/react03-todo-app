import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({todos, onRemove}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove}/>
            ))}
        </div>
    );
};

// todos배열을 props로 받아온 후, 이를 map()을 이용해서 여러개의 TodoListItem으로 변환
export default TodoList;
