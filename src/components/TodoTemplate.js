import './TodoTemplate.scss';

const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

// children으로 내부 JSX를 props로 받아와서 렌더링
export default TodoTemplate;