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

export interface AxioCrud {
  todosGet: Endpoint<{}, Todo[]>;
  todosPost: Endpoint<Omit<Todo, '_id'>, Todo>;
  todosPut: Endpoint<Omit<Todo, '_id'>, Todo>;
  todosDelete: Endpoint<Todo, Todo>;
}

const endpoints: AxioCrud = {
  todosGet: {
    method: 'get',
    path: '/todos',
    response: [],
  },
  todosPost: {
    method: 'post',
    path: '/todos',
    response: {...initialTodo},
  },
  todosPut: {
    method: 'put',
    path: '/todos/:id',
    response: {...initialTodo},
  },
  todosDelete: {
    method: 'delete',
    path: '/todos/:id',
    response: {...initialTodo},
  },
};

export default createExportedEndpoint(apiCrudBase, endpoints);
