import { useState, useCallback, useEffect } from 'react';

interface UseQueryStringOutput {
  value: string;
  changeValue: (newValue: string) => void;
}

function setQueryStringValue(key: string, value: string) {
  const url = new URL(window.location.href);
  const urlParams = new URLSearchParams(url.search);

  urlParams.set(key, value);
  url.search = urlParams.toString();
  const newURL = url.toString();

  window.history.pushState({ path: newURL }, '', newURL);
}

const getParamValue = (key: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  return searchParams.get(key);
};

function useQueryString(
  key: string,
  initialValue: string
): UseQueryStringOutput {
  const [value, setValue] = useState(getParamValue(key) || initialValue);

  const changeValue = useCallback(
    (newValue: string) => {
      setValue(newValue);
      setQueryStringValue(key, newValue);
    },
    [key]
  );

  useEffect(() => {
    if (getParamValue(key) === null) {
      changeValue(initialValue);
    }
  }, []);

  return { value, changeValue };
}

export default useQueryString;
