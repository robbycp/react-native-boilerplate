import React from 'react';

import TabCrudView from './TabCrudView';
import {
  useTodoCreate,
  useTodoDelete,
  useTodosGet,
  useTodoUpdate,
} from '~/hooks/dataState/crud.hooks';
import type {Todo} from '~/services/api/apiCrud';

const initialForm: Todo = {
  _id: '',
  description: '',
};

const TabCrudContainer = () => {
  const [formTodo, setFormTodo] = React.useState<Todo>(initialForm);
  const todosQuery = useTodosGet();
  const todoUpdate = useTodoUpdate();
  const todoDelete = useTodoDelete();
  const todoCreate = useTodoCreate();

  const handleDeleteTodo = (id: string) => {
    todoDelete.mutate({id});
  };
  const handleSubmitTodo = () => {
    if (formTodo._id) {
      todoUpdate.mutate({
        ...formTodo,
      });
    } else {
      todoCreate.mutate({
        ...formTodo,
      });
    }
  };

  React.useEffect(() => {
    if (todoCreate.isSuccess || todoUpdate.isSuccess) {
      setFormTodo(initialForm);
    }
  }, [todoCreate.isSuccess, todoUpdate.isSuccess]);

  const propsView = {
    formTodo,
    handleDeleteTodo,
    handleSubmitTodo,
    setFormTodo,
    todosQuery,
  };
  return <TabCrudView {...propsView} />;
};

export default TabCrudContainer;
