import { useEffect, useRef } from 'react';

export const useEffectNoFirstMount = (cb: Function, deps: Array<any>): void => {
  const isFirstMount = useRef(true);

  useEffect(() => {
    isFirstMount.current ? (isFirstMount.current = false) : cb();
  }, deps);
};
