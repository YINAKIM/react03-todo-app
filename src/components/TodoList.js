import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({todos, onRemove,onToggle}) => {
                                // onToggle를 props로 받아서 자식컴포넌트인 TodoListItem에 props로 전달
                                // TodoListItem컴포넌트에서는 이 props값이 바뀌었다면 해당요소는 새로운state로 업데이트 된 TodoListItem을 반환한다.
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    );
};

// todos배열을 props로 받아온 후, 이를 map()을 이용해서 여러개의 TodoListItem으로 변환
export default TodoList;
