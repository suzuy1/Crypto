
import { useState, useEffect, useRef, MutableRefObject } from 'react';

export function useOnScreen(options?: IntersectionObserverInit): [MutableRefObject<any>, boolean] {
  const ref = useRef<any>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        // We can unobserve once it's visible if we don't need it to animate again
        if(ref.current) {
            observer.unobserve(ref.current);
        }
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if(ref.current) {
        observer.unobserve(ref.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isIntersecting];
}
