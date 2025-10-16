import useFetch from './useFetch';

const useProducts = () => {
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');

  return { products, loading, error };
};

export default useProducts;