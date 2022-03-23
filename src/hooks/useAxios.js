import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (url) => {
  // receives err if useState set to anything besides []
  // likely because of map,thought I should still be able to set to null though.
  const [data, setData] = useState([]);

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
