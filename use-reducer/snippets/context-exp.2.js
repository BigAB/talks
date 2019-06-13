export const MyContext = createContext(null);

export const MyProvider = ({ children }) => {
  
  const [myState, dispatch] = useReducer(myReducer, initialState);

  return (
    <MyContext.Provider value={{ value, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};
