import InfoIcon from '../assets/icon-info.svg';

interface PerformanceCardProps {
    title: string,
    subtitle: string,
    number: string,
}

export default function PerformanceCard({title, subtitle, number} : PerformanceCardProps) {
    return (
        <div className='flex shrink bg-gray rounded border border-light-gray text-white aspect-square w-[241px] h-[199px] p-6 flex-col'>
            <div className='flex flex-row font-sans text-lg font-normal justify-between'>
                <h1>{title}</h1>
                <img src={InfoIcon} alt="Info" className='w-4 h-4'></img>
            </div>
            <div className='font-sans text-sm text-text-gray pt-2 font-light'>
                <h1>{subtitle}</h1>
            </div>
            <div className='font-body text-3xl font-bold justify-items-end pt-3'>
                <h1>{number}</h1>
            </div>

        </div>
    );
}