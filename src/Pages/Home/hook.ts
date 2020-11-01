import { useState, useEffect } from "react";

interface DataPropsType {
  result: any[];
  tab?: any;
}

export const useRequest = (fn: any, dependencies: any, defaultValue = []) => {
  const [data, setData] = useState<DataPropsType>({ result: defaultValue });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = () => {
    let cancel = false;
    setLoading(true);
    fn()
      .then((res: any) => {
        if (!cancel) {
          setData(res);
        } else {
          const { tab } = res;
          console.log(`request with ${tab} canceled`);
        }
      })
      .catch(() => {
        if (!cancel) {
          setError(error);
        }
      })
      .finally(() => {
        if (!cancel) {
          setLoading(false);
        }
      });

    return () => {
      cancel = true;
    };
  };

  useEffect(() => {
    const cancelRequest = request();
    return () => {
      cancelRequest();
    };
    // eslint-disable-next-line
  }, dependencies);

  return { data, setData, loading, error, request };
};

export function useWithLoading(fn: any) {
  const [loading, setLoading] = useState(false);

  const func = (...args: any) => {
    setLoading(true);
    return fn(...args).finally(() => {
      setLoading(false);
    });
  };

  return { func, loading };
}
