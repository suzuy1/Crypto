import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { THEME } from '../constants';
import type { ProConItem } from '../types';

interface StaggeredListProps {
  items: ProConItem[];
}

const StaggeredList: React.FC<StaggeredListProps> = ({ items }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <ul ref={ref} className="space-y-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex gap-3 transition-all duration-500 ease-out"
          style={{
            color: THEME.text.secondary,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transitionDelay: `${index * 120}ms`
          }}
        >
          <strong className="flex-shrink-0" style={{ color: THEME.text.primary }}>{item.strong}</strong>
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default StaggeredList;
