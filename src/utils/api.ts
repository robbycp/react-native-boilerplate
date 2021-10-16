import axios, {AxiosResponse} from 'axios';
import UrlPattern from 'url-pattern';
import type {Endpoint} from '~/types/api';

interface ApiOptions {
  endpoint?: Endpoint;
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
) => (
  apiOptions?: ApiOptions,
) => Promise<AxiosResponse<Record<string, unknown>>>;

type ApiInstance = (
  apiOptions?: ApiOptions,
) => Promise<AxiosResponse<Record<string, unknown>>>;

type ExportedEndpoint = <T>(
  apiInstance: ApiInstance,
  endpoints: T,
) => Record<keyof T, ApiInstance>;

export const createAxios: CreateAxios = ({baseURL, baseHeaders}) => {
  return apiOptions => {
    const {
      endpoint = ['get', ''],
      params = {},
      query,
      data,
      config = {},
    } = apiOptions || {};

    const method = endpoint[0];
    const url = getUrl(endpoint[1], params);

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
    })[method];

    const axiosOptions = {
      ...config,
      params: query,
      data,
    };

    if (['post', 'put', 'patch'].includes(method)) {
      return axiosInstance(url, data, axiosOptions);
    }
    return axiosInstance(url, axiosOptions);
  };
};

export const createExportedEndpoint: ExportedEndpoint = (
  apiInstance,
  endpoints,
) => {
  return {
    ...Object.entries(endpoints)
      .map(([key, value]): [string, ApiInstance] => [
        key,
        (apiOptions?: Omit<ApiOptions, 'endpoint'>) =>
          apiInstance({
            ...apiOptions,
            endpoint: value,
          }),
      ])
      .reduce((prev, cur) => {
        const key = cur[0] as keyof typeof endpoints;
        prev[key] = cur[1];
        return prev;
      }, {} as Record<keyof typeof endpoints, ApiInstance>),
  };
};
