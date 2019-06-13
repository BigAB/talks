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
