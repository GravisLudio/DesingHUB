import React from 'react';

interface BeadProps {
  color: string;
}

export const Bead: React.FC<BeadProps> = ({ color }) => {
  return (
    <div
      className="w-[38px] h-[38px] rounded-full relative transition-transform duration-200 hover:scale-115"
      style={{
        backgroundColor: color,
        boxShadow: `inset -4px -4px 8px rgba(0,0,0,0.3), 
                    inset 4px 4px 8px rgba(255,255,255,0.4), 
                    0 6px 12px rgba(0,0,0,0.15)`,
        border: color.toLowerCase() === '#ffffff' ? '1px solid #ddd' : 'none'
      }}
    >
      <div 
        className="absolute top-[15%] left-[15%] w-[30%] h-[30%] bg-white/35 rounded-full"
      />
    </div>
  );
};