import { useEffect, useRef, type DependencyList } from "react";

export default function useEffectOnUpdate(effectFunction: () => void, deps?: DependencyList) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      effectFunction();
    }
  }, deps);
}
