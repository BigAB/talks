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

export const Counter = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}
      >
        Reset
      </button>
    </>
  );
};
