import {useMutation, useQuery, useQueryClient} from 'react-query';
import type {AxiosError, AxiosResponse} from 'axios';

import apiCrud from '~/services/api/apiCrud';
import {useDispatch} from 'react-redux';
import {snackbarShow} from '~/store/slices/snackbar';
import type {Todo} from '~/services/api/apiCrud';

enum ServerStateKeysTodo {
  TodosGet = 'todos-get',
}
export const useTodosGet = () => {
  return useQuery(ServerStateKeysTodo.TodosGet, () => apiCrud.todosGet());
};

export const useTodoCreate = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse<Todo>, AxiosError, Todo>(
    newTodo => {
      return apiCrud.todosPost({
        data: {
          description: newTodo.description,
        },
      });
    },
    {
      onSuccess: () => {
        dispatch(
          snackbarShow({
            type: 'success',
            message: 'success create todo',
          }),
        );
        queryClient.invalidateQueries(ServerStateKeysTodo.TodosGet);
      },
      onError: () => {
        dispatch(
          snackbarShow({
            type: 'error',
            message: 'fail to create todo',
          }),
        );
      },
    },
  );
};
export const useTodoUpdate = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse<Todo>, AxiosError, Todo>(
    updatedTodo => {
      const {_id, ...data} = updatedTodo;
      return apiCrud.todosPut({
        params: {id: _id},
        data: {...data},
      });
    },
    {
      onSuccess: data => {
        dispatch(
          snackbarShow({
            type: 'success',
            message: `success update todo ${data.data?._id}`,
          }),
        );
        queryClient.invalidateQueries(ServerStateKeysTodo.TodosGet);
      },
      onError: data => {
        dispatch(
          snackbarShow({
            type: 'error',
            message: `fail to update todo: ${data.message}`,
          }),
        );
      },
    },
  );
};
export const useTodoDelete = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  return useMutation<unknown, AxiosResponse, {id: string}>(
    todoId =>
      apiCrud.todosDelete({
        params: {id: todoId},
      }),
    {
      onSuccess: (data, todoId) => {
        dispatch(
          snackbarShow({
            type: 'success',
            message: `success delete todo ${todoId}`,
          }),
        );
        queryClient.invalidateQueries(ServerStateKeysTodo.TodosGet);
      },
      onError: (data, todoId) => {
        dispatch(
          snackbarShow({
            type: 'error',
            message: `fail to delete todo ${todoId}`,
          }),
        );
      },
    },
  );
};
