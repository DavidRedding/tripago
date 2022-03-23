import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axios(url);
      console.log(res.data);
      setData(res.data);
    };
    getData();
  }, [url]);

  return { data };
};

export default useAxios;
