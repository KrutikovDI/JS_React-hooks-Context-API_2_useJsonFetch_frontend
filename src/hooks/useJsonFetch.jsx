import { useState, useEffect } from "react";

export const useJsonFetch = (url, opts='') => {
  const [data, setData] = useState ();
  const [isLoading, setLoading] = useState (false);
  const [hasError, setError] = useState (null);

    useEffect(() => {
      const fetchData = async () => {
        console.log(url)
        setLoading(true);
        try {
          const response = await fetch(url);
          if (response.status != 200) {
            throw new Error(response.statusText)
          }
          const data = await response.json()
          setData(data)
          setError(null);
        } catch (error) {
          if (error instanceof Error) { setError(error) }
        } finally {
          setLoading(false);
        }
      }

      fetchData ()
    }, [url]);

  return [{ data, isLoading, hasError }];
}
