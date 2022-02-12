import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from "react-icons/md";
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle}) => {  // onToggle props를 전달받아,
                                                        // 받아온 todo props를 {id,text, checked}객체에 복사하고
                                                        // 복사한 요소에서 각 state값을 꺼내서확인,
                                                        // onClick이벤트에 연결한 onToggle함수호출에 id값을 인자로 보내서 return된 새로운 state로 업데이트하여 returnJSX에 넣어 내보낸다.
    // onToggle함수를 App.js에 선언하는 이유는 ? props로 전달해야되니까,
    // onToggle함수를 TodoListItem에서 호출할 수 있는 이유는 ? props로 전달받았으니까 사용할 수 있고, 그걸 onClick이벤트에 연결한 것.
    // props로 전달받아야하는 이유는 ? 화면에서 이벤트가 일어난 요소에 대한 state값을 props로 전달받아야만 자식컴포넌트에서 "[읽어서]-[state로복사해서]-[사용(변경)하여]-[새로운 state가들어간 JSX]를 return" 할 수 있기 때문
    // input이 없으면 해당되는 output을 변경할 수 없다.

    const {id, text, checked} = todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox',{checked})}
                  onClick={()=> onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

// todo객체를 props로 받아와서 상태에 따라 다른 스타일의 UI표출
export default TodoListItem;
