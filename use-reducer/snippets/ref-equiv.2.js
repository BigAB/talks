export const MyComponent = ({ tax }) => {
  const [cart, dispatch] = useReducer((state, action) => {
    if (action.type === ADD_TO_CART) {
      return {
        ...state,
        total: state.total + action.price + action.price * tax
      };
    }
    return state;
  }, initialState);

  return (
    <CartContext.Provider value={{ dispatch, cart }}>
      {children}
    </CartContext.Provider>
  );
};
