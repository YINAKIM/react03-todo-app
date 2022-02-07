import {MdAdd} from "react-icons/md";
import './TodoInsert.scss';
import {useCallback, useState} from "react";

// 이벤트 연결하기 : onInsert이벤트객체를 받아서 onSubmit이벤트에 연결
const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');     // value: input에 들어갈 상태값, useState로 관리한다.

    const onChange = useCallback(e => {
        setValue(e.target.value);
    });

    const onSubmit = useCallback(
        e => {
            onInsert(value);     // App.js에서 onInsert객체로 넘긴 콜백이 실행될 때, input에 들어간 상태값으로 실행된다.
            setValue('');  // onInsert가 끝나면 value값은 클리어시킴

            // submit이벤트는 브라우저에서 새로고침을 발생시키므로, 이를 방지
            e.preventDefault();
        },[onInsert, value],
    );

    /********************************************************************************************************
    - onSubmit이라는 함수를 form "TodoInsert"의 submit이벤트에 연결
    - 함수 호출시, 현재 value값(input입력값 state)을 인자로 넣어서 props로 받아온 onInsert함수호출 > 현재 value는 초기화시킨다.
    - <button>에 onClick으로 연결할 수 있지만, onSubmit은 [Enter]키로도 발생되기때문에
    - onClick을 사용하면 Enter키 입력시 로직도 따로 구현해야해서 불편하다.
    *********************************************************************************************************/
    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할일을 입력하세요." onChange={onChange} value={value}/>
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );

};

// state를 통해 인풋의 상태를 관리
export default TodoInsert;