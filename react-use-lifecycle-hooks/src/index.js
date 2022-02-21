/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useRef } from "react";

export const useComponentWillMount = (cb) => {
  const willMount = useRef(true);
  if (willMount.current) cb();
  willMount.current = false;
};

// eslint-disable-next-line react-hooks/exhaustive-deps
export const useComponentDidMount = (cb) => useEffect(cb, []);

export const useComponentDidUpdate = (cb) => {
  const hasMounted = useRef(false);
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    cb();
  });
};

export const useComponentWillUnmount = (cb) => {
  useEffect(() => {
    return () => {
      cb();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
