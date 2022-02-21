'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

/* eslint-disable import/no-anonymous-default-export */
var useComponentWillMount = function useComponentWillMount(cb) {
  var willMount = react.useRef(true);
  if (willMount.current) cb();
  willMount.current = false;
}; // eslint-disable-next-line react-hooks/exhaustive-deps

var useComponentDidMount = function useComponentDidMount(cb) {
  return react.useEffect(cb, []);
};
var useComponentDidUpdate = function useComponentDidUpdate(cb) {
  var hasMounted = react.useRef(false);
  react.useEffect(function () {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    cb();
  });
};
var useComponentWillUnmount = function useComponentWillUnmount(cb) {
  react.useEffect(function () {
    return function () {
      cb();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

exports.useComponentDidMount = useComponentDidMount;
exports.useComponentDidUpdate = useComponentDidUpdate;
exports.useComponentWillMount = useComponentWillMount;
exports.useComponentWillUnmount = useComponentWillUnmount;
//# sourceMappingURL=index.js.map
