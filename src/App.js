import logo from './logo.svg';
import './App.css';
import {useState, useCallback, useRef} from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
    const [todos, setTodos] = useState([
        {id:1, text:'리액트의 기초 알아보기', checked:true, },
        {id:2, text:'컴포넌트 스타일링 해보기', checked:true, },
        {id:3, text:'일정관리 앱 만들어보기', checked:false, },
        ]);

    // todos배열에 새 todo객체 추가하기
    const nextId = useRef(4); // 고유값으로 사용될 id값 : ref로 변수담아서 사용
    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };

        setTodos(todos.concat(todo));
        nextId.current += 1; // nextId를 +1씩
    }, [todos],);


    // todos배열의 불변성을 유지하면서 id로 항목 지우기 : filter()사용
    const onRemove = useCallback(
        id => {
            setTodos(todos.filter(todo => todo.id !== id));
        }, [todos],
    );

    // TodoList컴포넌트에 props로 넣을 함수 > TodoList를 통해 TodoListItem으로 전달 > item별로 state수정되도록 구현
    const onToggle = useCallback(
        id => {
            setTodos(
                // map함수로 무조건 새로운 배열을 반환(불변성유지)
                // : onToggle이벤트가 실제 발생한 그id가 같은 요소는 ? checked상태값이 변경된 요소가 return배열에 들어감
                // : onToggle이벤트가 발생한 id가 아닌 요소들은 ? checked상태값이 그대로유지된 채 return배열에 들어감
                todos.map(todo =>
                    todo.id === id ?
                        {...todo, checked: !todo.checked}
                        : todo,
                    )
            );
        },[todos]
    );

    return(
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    );
}

export default App;
