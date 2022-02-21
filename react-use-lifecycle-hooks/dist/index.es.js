import { useRef, useEffect } from 'react';

/* eslint-disable import/no-anonymous-default-export */
var useComponentWillMount = function useComponentWillMount(cb) {
  var willMount = useRef(true);
  if (willMount.current) cb();
  willMount.current = false;
}; // eslint-disable-next-line react-hooks/exhaustive-deps

var useComponentDidMount = function useComponentDidMount(cb) {
  return useEffect(cb, []);
};
var useComponentDidUpdate = function useComponentDidUpdate(cb) {
  var hasMounted = useRef(false);
  useEffect(function () {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    cb();
  });
};
var useComponentWillUnmount = function useComponentWillUnmount(cb) {
  useEffect(function () {
    return function () {
      cb();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export { useComponentDidMount, useComponentDidUpdate, useComponentWillMount, useComponentWillUnmount };
//# sourceMappingURL=index.es.js.map
