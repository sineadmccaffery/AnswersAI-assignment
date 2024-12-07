import GraySparkleIcon from '../assets/icon-smallSparkleGray.svg';
import GreenSparkleIcon from '../assets/icon-smallSparkleGreen.svg';
import PlusIcon from '../assets/icon-plus.svg';
import CheckIcon from '../assets/icon-check.svg';
import { ReactEventHandler, useState } from 'react';

interface VariableButtonProps {
    title: string,
    selected: boolean,
    onClick: ReactEventHandler,
}
export default function VariableButton({title, selected} : VariableButtonProps) {
    const [isSelected, setSelected] = useState(selected);
    let styleClass: string;
    let sparkle: string;
    let icon: string;

    const handleClick = () => setSelected(!isSelected);


    switch (isSelected) {
        case (true) :
            styleClass = 'bg-dark-green border-[0.5px] border-green text-green'
            sparkle = GreenSparkleIcon
            icon = CheckIcon
            break
        case (false) :
            styleClass = 'bg-gray border-[0.5px] border-text-gray text-text-gray'
            sparkle = GraySparkleIcon
            icon = PlusIcon
            break
    };

    return (
        <div className={`${styleClass} flex flex-row space-x-4 rounded-full p-2 text-sm min-w-12 h-8 items-center cursor-pointer`} onClick={handleClick}>
            <p>{title}</p>
            <div className='flex flex-row'>
                <img src={sparkle} alt="Autofill" className='w-6 h-6 pt-1.5'></img>
                <img src={icon} alt="+" className='w-6 h-6 pt-1.5'></img>
            </div>
        </div>
    );
}