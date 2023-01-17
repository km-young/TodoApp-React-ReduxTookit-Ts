import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTodo, switchTodo} from '../redux/modules/todosSlice';
import { TodoState } from '../redux/modules/type';
import { RootState } from '../redux/config/configStore';

type TodoProps = {
  item: TodoState,
  isActive: boolean,
}
// todo에 대한 파라미터에 넣을 타입..
export default function Todo({item, isActive}: TodoProps) {
  const {todos} = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleDeletButtonClick = () => {
    dispatch(
      deleteTodo(
        item.id // payload에 item.id가 담김.
      )
    );
  };
  const handleSwitchButtonClick = () => {
    dispatch(switchTodo(item.id));
  };
  return (
    <ItemBox bgColor={isActive ? '#e9fff0' : '#eee'}>
      <h4>{item.title}</h4>
      <p>{item.contents}</p>
      <button onClick={handleSwitchButtonClick}>
        {isActive ? '완료' : '취소'}
      </button>
      <button onClick={handleDeletButtonClick}>삭제</button>
    </ItemBox>
  );
}

const ItemBox = styled.div<{bgColor:string}>`
  width: 28%;
  min-width: 335px;
  margin: 10px;
  padding: 0 20px 15px 20px;
  border-radius: 30px;
  box-shadow: inset 1px 1px 5px 1px;
  &:hover {
    background-color: ${(props) => props.bgColor};
  }
`;
