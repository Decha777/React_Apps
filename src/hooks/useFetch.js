import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setdata(result);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log("error", error);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);
  return { loading, data };
};
