import { useState, useEffect } from 'react';

const useGetData = (API) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API, {
          headers: {
            "x-apisports-key": "61aaeef8bd4807617135c75deb0bba21"
          },
        });
        const responseData = await response.json();
        console.log(responseData);
        setData(responseData);
      } catch (error) {
        console.log("Erro ao fazer fetch:", error);
      }
    };

    fetchData();
  }, [API]);

  return data;
};

export default useGetData;
