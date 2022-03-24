import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

const useAxios = (url, _options) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // use useRef to wrap an object/array argument
  // which is  a useEffect dependency
  const options = useRef(_options).current;

  useEffect(() => {
    console.log(options);
    const controller = new AbortController();
    const fetchData = async () => {
      setIsPending(true);
      try {
        const { data: res } = await axios(url, { signal: controller.signal });
        setIsPending(false);
        setData(res);
        setError(null); // in-case there was an err in past renders
      } catch (err) {
        if (err.message === 'canceled') {
          console.log(`the fetch was aborted`);
        } else {
          setIsPending(false);
          setError(`Could not fetch the data`);
        }
      }
    };
    fetchData();

    return () => controller.abort();
  }, [url, options]);

  return { data, isPending, error };
};

export default useAxios;
