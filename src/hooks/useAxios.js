import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (url, name) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(name);
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
  }, [url, name]);

  return { data, isPending, error };
};

export default useAxios;
