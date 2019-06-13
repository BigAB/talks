export const MyContext = createContext(null);

export const MyProvider = ({ children }) => {
  const [myState, setState] = useState(initialState);

  const update = useCallback(
    values => {
      setState(state => ({ ...state, ...values }));
    },
    [setState]
  );

  return (
    <MyContext.Provider value={{ value, update }}>
      {children}
    </MyContext.Provider>
  );
};
