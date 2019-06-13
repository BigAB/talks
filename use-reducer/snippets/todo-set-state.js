const [todos, setTodos] = useState([]);

const doTodo = todo => {
  setTodos(todos =>
    todos.map(t => (t.id === todo.id ? { ...t, complete: true } : t))
  );
};

const undoTodo = todo => {
  setTodos(todos =>
    todos.map(t => (t.id === todo.id ? { ...t, complete: false } : t))
  );
};

const addTodo = todo => {
  setTodos(todos => [...todos, todo]);
};
