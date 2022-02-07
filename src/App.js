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

    return(
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos}/>
      </TodoTemplate>
    );
}

export default App;
