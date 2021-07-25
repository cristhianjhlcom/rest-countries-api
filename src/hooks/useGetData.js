import React from "react";

export function useGetData(fn) {
  const [data, setData] = React.useState(null);
  const [isError, setIsError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);
    try {
      const res = await fn();
      if(res) {
        setData(res);
      } else {
        setData([]);
      }
      setIsLoading(false);
    } catch (error) { 
      setIsError(error);
    }
  }
  
  return { 
    data, 
    isError, 
    isLoading 
  };
}
