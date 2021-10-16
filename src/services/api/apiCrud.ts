import {createAxios, createExportedEndpoint} from '~/utils/api';
import type {Endpoint} from '~/types/api';

// Use instant crud api https://crudcrud.com/
const apiCrudBase = createAxios({
  baseURL: 'https://crudcrud.com/api/ce34b63c5e9a4567be7c423c7bd77d8b',
});

const endpoints = {
  getTodos: ['get', '/todos'] as Endpoint,
  postTodos: ['post', '/todos'] as Endpoint,
  putTodos: ['put', '/todos/:id'] as Endpoint,
  deleteTodos: ['delete', '/todos/:id'] as Endpoint,
};

export default createExportedEndpoint(apiCrudBase, endpoints);
