import React from 'react';
import { useState } from 'react'
import HomeIcon from '../assets/icon-home.svg';
import BellIcon from '../assets/icon-bell.svg';
import ClipboardIcon from '../assets/icon-clipboard.svg';
import UploadIcon from '../assets/icon-upload.svg';
import SettingsIcon from '../assets/icon-settings.svg';

interface SidebarProps {
    isOpen: boolean;
}
export default function Sidebar({isOpen} : SidebarProps) {
    if (isOpen) {
        return (
             <div className='bg-black w-20 mt-20 pt-10 h-[260vh] justify-items-center'>
                 <div className="flex flex-col space-y-10">
                     <img src={HomeIcon} alt="Home" className="w-6 h-6" />
                     <img src={BellIcon} alt="Notifications" className="w-6 h-6" />
                     <img src={ClipboardIcon} alt="Clipboard" className="w-6 h-6" />
                     <img src={UploadIcon} alt="Upload" className="w-6 h-6" />
                     <img src={SettingsIcon} alt="Settings" className="w-6 h-6" />
                 </div>
             </div>
        );
    }
}