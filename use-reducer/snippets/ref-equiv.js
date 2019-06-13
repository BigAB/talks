export const MyComponent = ({ tax }) => {
  const [cart, setState] = useState(initialState);

  const addToCart = useCallback(
    price => {
      setState(state => ({
        ...state,
        total: state.total + price + price * tax
      }));
    },
    [setState, tax]
  );

  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};
