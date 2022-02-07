import {MdAdd} from "react-icons/md";
import './TodoInsert.scss';

const TodoInsert = () => {
    return(
        <form className="TodoInsert">
            <input placeholder="할일을 입력하세요."/>
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );

};

// state를 통해 인풋의 상태를 관리
export default TodoInsert;