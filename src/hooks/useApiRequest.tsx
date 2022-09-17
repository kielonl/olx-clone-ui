import { useEffect, useState } from "react";
import { ApiHook } from "../types";
import { makeRequest } from "../api/makeRequest";

export const UseApiRequest = (
  method: string,
  url: string,
  data?: string[] | undefined
): ApiHook => {
  const [response, setResponse] = useState<{ [key: string]: any }>({});
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const asyncFn = async () => {
      try {
        const request = await makeRequest(method, url, data);
        setResponse(request);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    asyncFn();
  }, [url]);

  return { response, error, loading };
};
