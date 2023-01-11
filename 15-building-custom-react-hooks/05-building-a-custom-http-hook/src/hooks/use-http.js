import { useState } from "react";

const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = requestConfig.url;

  const sendRequest = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchConfig = {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: JSON.stringify(requestConfig.body),
      };
      const response = await fetch(url, fetchConfig);

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  //return { isLoading: isLoading, error: error, sendReaquest: sendRequest };
  return { isLoading, error, sendRequest }; // modern js syntax that isn't as verbose since keys are same
};

export default useHttp;
