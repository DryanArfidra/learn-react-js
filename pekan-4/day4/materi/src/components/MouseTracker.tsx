import React, { useState, type FC} from 'react';

interface Position {
  x: number;
  y: number;
}

interface MouseTrackerProps {
  render: (position: Position) => React.ReactNode;
}

export const MouseTracker: FC<MouseTrackerProps> = ({ render }) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div style={{ height: '200px', border: '1px solid black', position: 'relative' }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
};