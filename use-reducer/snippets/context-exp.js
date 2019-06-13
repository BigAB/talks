const { dispatch } = useContext(MyContext);

<MyForm onSubmit={
  values => dispatch({ type: UPDATE, payload: values })
} />;
