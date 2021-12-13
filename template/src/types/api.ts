export type Endpoint<
  RequestType = {},
  ResponseType = Record<string, unknown>,
> = {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  path: string;
  response: ResponseType;
  requestData?: RequestType;
};
