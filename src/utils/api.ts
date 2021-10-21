import axios, {AxiosResponse} from 'axios';
import UrlPattern from 'url-pattern';
import type {Endpoint} from '~/types/api';

interface ApiOptions<ResponseType> {
  endpoint?: Endpoint<ResponseType>;
  params?: Record<string, unknown>;
  query?: Record<string, unknown>;
  data?: Record<string, unknown>;
  config?: Record<string, unknown>;
}

interface ApiConfig {
  baseURL: string;
  baseHeaders?: Record<string, unknown>;
}

const getUrl = (urlPattern: string, params: Record<string, unknown>) => {
  const pattern = new UrlPattern(urlPattern);
  return pattern.stringify(params);
};

type CreateAxios = (
  apiConfig: ApiConfig,
) => <ResponseType>(
  apiOptions?: ApiOptions<ResponseType>,
) => Promise<AxiosResponse<ResponseType>>;

interface ApiInstance<ResponseType> {
  (apiOptions?: ApiOptions<ResponseType>): Promise<AxiosResponse<ResponseType>>;
}

interface ExportedEndpoint {
  <Type extends Record<keyof Type, Endpoint<Type[keyof Type]['response']>>>(
    apiInstance: ReturnType<CreateAxios>,
    endpoints: Type,
  ): Record<keyof Type, ApiInstance<Type[keyof Type]['response']>>;
}

export const createAxios: CreateAxios = ({baseURL, baseHeaders}) => {
  return apiOptions => {
    const {
      endpoint = {method: 'get', path: ''},
      params = {},
      query,
      data,
      config = {},
    } = apiOptions || {};

    const method = endpoint.method;
    const url = getUrl(endpoint.path, params);

    const headers: Record<string, unknown> = {};

    if (baseHeaders) {
      headers.serviceId = baseHeaders.serviceId;
      headers.serviceSecret = baseHeaders.serviceSecret;
    }

    const axiosInstance = axios.create({
      baseURL,
      timeout: 1000,
      headers: {
        'Cache-Control': 'no-store',
        'Content-Type': 'application/json',
      },
    });

    const axiosOptions = {
      ...config,
      params: query,
      data,
    };

    return axiosInstance.request({
      ...axiosOptions,
      method,
      url,
    });
  };
};

export const createExportedEndpoint: ExportedEndpoint = (
  apiInstance,
  endpoints,
) => {
  return {
    ...Object.keys(endpoints).reduce((prev, key) => {
      const newKeys = key as keyof typeof endpoints;
      const endpoint = endpoints[newKeys];
      prev[newKeys] = apiOptions =>
        apiInstance<typeof endpoints[keyof typeof endpoints]['response']>({
          ...apiOptions,
          endpoint,
        });
      return prev;
    }, {} as Record<keyof typeof endpoints, ApiInstance<typeof endpoints[keyof typeof endpoints]['response']>>),
  };
};
