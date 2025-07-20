import React from 'react';
import { THEME } from '../constants';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative p-6 md:p-8 rounded-lg shadow-lg border transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(100,255,218,0.2)] ${className}`}
      style={{ 
        backgroundColor: THEME.bg.secondary,
        borderColor: THEME.border
      }}
    >
      <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{'--tw-gradient-from': THEME.accent, '--tw-gradient-to': 'transparent'} as React.CSSProperties} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Card;