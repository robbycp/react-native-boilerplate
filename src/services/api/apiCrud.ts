import {createAxios, createExportedEndpoint} from '~/utils/api';
import type {Endpoint} from '~/types/api';

export interface Todo {
  _id: string;
  description: string;
}
const initialTodo: Todo = {
  _id: '',
  description: '',
};
// Use instant crud api https://crudcrud.com/
const apiCrudBase = createAxios({
  baseURL: 'https://crudcrud.com/api/3cf771bd91bd4b46bc0b1d25b512fcf4',
});

const endpoints = {
  todosGet: {
    method: 'get',
    path: '/todos',
    response: [],
  } as Endpoint<Todo[]>,
  todosPost: {
    method: 'post',
    path: '/todos',
    response: {...initialTodo},
  } as Endpoint<Todo>,
  todosPut: {
    method: 'put',
    path: '/todos/:id',
    response: {...initialTodo},
  } as Endpoint<Todo>,
  todosDelete: {
    method: 'delete',
    path: '/todos/:id',
    response: {...initialTodo},
  } as Endpoint<Todo>,
};

export default createExportedEndpoint<typeof endpoints>(apiCrudBase, endpoints);
