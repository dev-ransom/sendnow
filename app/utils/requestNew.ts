import axios, { AxiosError, AxiosResponse } from 'axios';

async function requestNew<T>(options: Record<string, unknown>): Promise<T> {
  const accessToken = JSON.parse(localStorage.getItem('access-token') ?? 'null') as string;

  const headers = accessToken
    ? {
        Authorization: `Bearer ${accessToken}`
      }
    : undefined;

  const client = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
    headers
  });

  const onSuccess = (response: AxiosResponse<T>) => {
    const { data } = response;
    return data;
  };

  function onError(error: AxiosError) {
    return Promise.reject(error.response);
  }

  return client(options).then(onSuccess).catch(onError);
}

export default requestNew;