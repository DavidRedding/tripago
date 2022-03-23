import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);

      const res = await axios(url);

      setIsPending(false);
      setData(res.data);
    };
    getData();
  }, [url]);

  return { data, isPending };
};

export default useAxios;
