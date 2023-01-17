import Todo from './Todo';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import { RootState } from '../redux/config/configStore';

type TodoListProps = {
  isActive: boolean;
};

export default function TodoList({isActive}: TodoListProps) {
  const {todos} = useSelector((state: RootState) => state.todos);
  return (
    <>
      <h1>{isActive ? '✏️ Working' : '🎉 Done'}</h1>
      <SectionBox>
        {todos
          .filter((item) => item.isDone !== isActive)
          .map((item) => {
            return <Todo item={item} isActive={isActive} key={item.id} />;
          })}
      </SectionBox>
    </>
  );
}

const SectionBox = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
