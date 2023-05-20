import { useState, useEffect } from "react";

const useGetData = (API) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API, {
          method: "GET",
          headers: {
            "x-rapidapi-key": "61aaeef8bd4807617135c75deb0bba21",
            "x-rapidapi-host": "v3.football.api-sports.io",
          },
        });

        if (!response.ok) {
          throw new Error("Erro na requisição");
        }

        const responseData = await response.json();
        console.log(responseData.response);
        setData(responseData.response);
      } catch (error) {
        console.log("Ocorreu um erro:", error.message);
      }
    };

    fetchData();
  }, [API]);

  return data;
};

export default useGetData;
