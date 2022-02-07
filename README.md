# TODO앱 만들기

### TodoTemplate
- children으로 내부 JSX를 props로 받아와서 렌더링 해준다.

### TodoInsert 
- 새로운 항목을 입력하여 추가할 수 있는 컴포넌트
- state를 통해 인풋의 상태를 관리

### TodoListItem
- 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
- todo객체를 props로 받아와서 상태에 따라 다른 스타일의 UI표출

### TodoList
- todos배열을 props로 받아온 후, 이를 map()을 이용해서 여러개의 TodoListItem으로 변환
