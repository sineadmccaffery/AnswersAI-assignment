import React from 'react';
import Button from './Button';
import IconButton from './IconButton';
import HamburgerIcon from '../assets/icon-hamburger.svg';

interface NavbarProps {
    onClick: () => void;
}
export default function Navbar({onClick} : NavbarProps) {
    return (
        <nav className="bg-black text-white fixed w-full">
          <div className="max-w-full">
            <div className="flex items-center h-[87px] w-full justify-between">
              <div className="flex items-center space-x-4 px-4">
                <IconButton icon={HamburgerIcon} text="Menu" type="primary" onClick={onClick}/>
                <div className="flex flex-row items-center space-x-6">
                  <Button size="small" type="primary">Charging Stations</Button>
                  <Button size="small" type="primary">Fleet Sizing</Button>
                  <Button size="small" type="primary">Parking</Button>
                </div>
              </div>
    
              <div className="flex w-full items-center justify-end mx-6">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-1/4 px-4 py-2 rounded-md bg-dark-gray text-sm text-white border border-light-gray focus:outline-none"
                />
              </div>
            </div>
          </div>
        </nav>
      );
  }
  