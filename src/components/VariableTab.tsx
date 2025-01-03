import { useState } from 'react';
import DownArrowIcon from '../assets/icon-downArrow.svg';

interface VariableTabProps {
    title: string,
}
export default function VariableTab({title} : VariableTabProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-gray border border-light-gray rounded text-light-green sm:text-xl font-medium h-[56px] mt-4'>
            <div className='p-2 flex flex-row justify-between sm:px-6 sm:py-3 items-center text-wrap'>
                <h1>{title}</h1>
                <button onClick={handleToggle} className='w-[44px] h-[34px] rounded-full border border-green'>
                  <img src={DownArrowIcon} alt="v" className="w-4 h-2 ml-4"></img>
                </button>
            </div>

        </div>
    );
}