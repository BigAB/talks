import React, { useReducer } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  border-radius: 10%;
  width: 2em;
  height: auto;
  padding: 0;
  margin: 0.5em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 10em;
`;

const Count = styled.div`
  font-size: 2em;
  margin-bottom: 0.5em;
`;

const init = initialCount => {
  return { count: initialCount };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
};

export const Counter = ({ initialCount = 0, simple = false }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <Container>
      <Count>Count: {state.count}</Count>
      <div>
        <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
        <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
      </div>
      {simple ? null : (
        <Button
          onClick={() => dispatch({ type: 'reset', payload: initialCount })}
          style={{ width: '5em', margin: '0.5em' }}
        >
          Reset
        </Button>
      )}
    </Container>
  );
};
