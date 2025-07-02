import React from 'react';

interface GridProps {
  children: React.ReactNode;
  cols?: number; // Number of columns, default 3
  gap?: string; // Tailwind gap class, default 'gap-4'
  className?: string;
}

export const Grid = ({
  children,
  cols = 3,
  gap = 'gap-1',
  className = '',
}: GridProps) => {
  return (
    <section
      className={`m-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-${cols} ${gap} ${className}`.trim()}
    >
      {children}
    </section>
  );
};

export default Grid;
