import React from 'react';
import {ReactElement} from 'react';

interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  type: 'primary' | 'secondary';
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Button ({ size, type, onClick, children }: ButtonProps): ReactElement {
  const baseClasses: string = 'text-white rounded-md flex items-center justify-center';
  let sizeClass: string;
  let colorClass: string;

  switch (size) {
    case 'small':
      sizeClass = 'px-3 py-2 text-sm';
      break;
    case 'medium':
      sizeClass = 'px-4 py-2 text-base';
      break;
    case 'large':
      sizeClass = 'px-5 py-3 text-lg';
      break;
    default:
      sizeClass = 'px-4 py-2 text-base';
  }

  switch (type) {
    case 'primary':
      colorClass = 'bg-black hover:bg-gray hover:border hover:border-light-gray active:bg-light-gray';
      break;
    case 'secondary':
      colorClass = 'bg-gray border border-light-gray hover:bg-light-gray hover:border-white active:bg-light-gray';
      break;
  }

  return (
    <button
      className={`${baseClasses} ${sizeClass} ${colorClass} whitespace-nowrap`}
      onClick={onClick}
    >
    
      {children}
    </button>
  );
};