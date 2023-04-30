import axios, { AxiosRequestConfig, Method } from 'axios';
import { API_BASE_URL } from '../../constants/endpoints';

export type RequestPayload = Record<string, unknown> | FormData | Blob;

export interface FetchApiParams<TRequest = RequestPayload> extends AxiosRequestConfig {
  resourceUrl: string;
  method: Method;
  body?: TRequest;
}

const fetchApi = async <TResponseData = void, TError = unknown, TRequest = RequestPayload>({
  resourceUrl,
  method,
  body,
  headers,
  ...options
}: FetchApiParams<TRequest>) => {
  try {
    const response = await axios({
      method,
      baseURL: API_BASE_URL,
      url: resourceUrl,
      headers: {
        Accept: 'application/json',
        ...(body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
        ...headers,
      },
      ...(body ? { data: body } : {}),
      ...options,
    });

    return response.data as TResponseData;
  } catch (error) {
    // eslint-disable-next-line no-throw-literal
    throw error as TError;
  }
};

export const defaultQueryFn = async <TResponseData = void, TError = unknown>(
  url: string,
  options?: Omit<FetchApiParams, 'method' | 'resourceUrl' | 'body'>,
) => {
  try {
    const responseData = await fetchApi<TResponseData, TError>({
      resourceUrl: url,
      method: 'GET',
      ...(options ?? {}),
    });

    return responseData;
  } catch (error) {
    throw error;
  }
};

export const defaultMutationFn = async <
  TResponseData = void,
  TError = unknown,
  TRequest = RequestPayload,
>(
  url: string,
  options?: Omit<FetchApiParams<TRequest>, 'resourceUrl'>,
) => {
  try {
    const responseData = await fetchApi<TResponseData, TError, TRequest>({
      resourceUrl: url,
      method: 'POST',
      ...(options ?? {}),
    });

    return responseData;
  } catch (error) {
    throw error;
  }
};
