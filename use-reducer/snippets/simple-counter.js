const reducer = (count, action) => {
  switch (action.type) {
    case 'increment':
      return count + 1;
    case 'decrement':
      return count - 1;
    default:
      throw new Error();
  }
};

export const Counter = ({ initialCount = 0 }) => {
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
};
