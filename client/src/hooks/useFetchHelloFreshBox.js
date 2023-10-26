import { useFetch } from './useFetch';

export const useFetchHelloFreshBox = () => {
  const {
    data,
    isLoading,
    feedback,
  } = useFetch('/products');

  return {
    data: data && data.length ? data[0] : {},
    loading: isLoading,
    success: feedback.success,
  };
};
