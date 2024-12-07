import React from 'react';
import {ReactElement} from 'react';

interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  type: 'primary' | 'secondary';
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Button ({ size, type, onClick, children }: ButtonProps): ReactElement {
  const baseClasses: string = 'px-2 py-1 text-xs text-white rounded-md flex items-center justify-center sm:w-auto';
  let sizeClass: string;
  let colorClass: string;

  switch (size) {
    case 'small':
      sizeClass = 'sm:px-3 sm:py-2 sm:text-sm';
      break;
    case 'medium':
      sizeClass = 'sm:px-4 sm:py-2 sm:text-base';
      break;
    case 'large':
      sizeClass = 'sm:px-5 sm:py-3 sm:text-lg';
      break;
    default:
      sizeClass = 'sm:px-4 sm:py-2 sm:text-base';
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