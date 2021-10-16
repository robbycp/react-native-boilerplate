import React from 'react';
import apiCrud from '~/services/api/apiCrud';

import TabCrudView from './TabCrudView';
import type {Todo} from './TabCrudView';

const initialForm: Todo = {
  _id: '',
  description: '',
};

const TabCrudContainer = () => {
  const [formTodo, setFormTodo] = React.useState<Todo>(initialForm);
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleGetTodo = async () => {
    const fetchedTodos = (await apiCrud.getTodos()) as unknown as {
      data: Todo[];
    };
    setTodos(fetchedTodos.data);
  };
  const handleDeleteTodo = (id: string) => {
    apiCrud.deleteTodos({
      params: {id},
    });
    handleGetTodo();
  };
  const handleSubmitTodo = () => {
    if (formTodo._id) {
      apiCrud.putTodos({
        params: {id: formTodo._id},
        data: {...formTodo},
      });
    } else {
      apiCrud.postTodos({
        data: {...formTodo},
      });
    }
    setFormTodo(initialForm);
    handleGetTodo();
  };

  React.useEffect(() => {
    handleGetTodo();
  }, []);

  const propsView = {
    formTodo,
    handleDeleteTodo,
    handleSubmitTodo,
    setFormTodo,
    todos,
  };
  return <TabCrudView {...propsView} />;
};

export default TabCrudContainer;
