import axios, { AxiosError, AxiosResponse } from 'axios';

async function requestNew<T>(
  options: {
    url: string;
    method: string;
    data?: any;
    requiresAuth?: boolean; // New flag to control auth
  }
): Promise<T> {
  // Only get token if explicitly required
  const accessToken = options.requiresAuth
    ? (JSON.parse(localStorage.getItem('token') ?? 'null') as string)
    : null;

  const headers = accessToken
    ? {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }
    : {
        'Content-Type': 'application/json',
      };

  const client = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/`,
    headers,
  });

  const onSuccess = (response: AxiosResponse<T>) => response.data;

  const onError = (error: AxiosError) => {
    // Improved error handling
    if (error.response) {
      return Promise.reject({
        status: error.response.status,
        data: error.response.data,
        message: (error.response.data as any)?.message || error.message,
      });
    }
    return Promise.reject(error);
  };

  return client(options).then(onSuccess).catch(onError);
}

export default requestNew;