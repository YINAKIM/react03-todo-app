import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from "react-icons/md";
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo}) => {
    const {text, checked} = todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox',{checked})}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <MdCheckBoxOutlineBlank/>
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

// todo객체를 props로 받아와서 상태에 따라 다른 스타일의 UI표출
export default TodoListItem;