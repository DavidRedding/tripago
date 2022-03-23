import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const { data: res } = await axios(url);
        setIsPending(false);
        setData(res);
        setError(null); // in-case there was an err in past renders
      } catch (err) {
        setIsPending(false);
        setError(`Could not fetch the data`);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
};

export default useAxios;
