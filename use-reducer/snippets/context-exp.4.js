const { update } = useContext(MyContext);

<MyForm onSubmit={values => update(values)} />;
