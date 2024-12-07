import InfoIcon from '../assets/icon-info.svg';

interface HoverCardProps {
    title: string,
    description: string,
}

export default function HoverCard({title, description} : HoverCardProps) {
    return (
        <div className="bg-gray border border-light-gray px-9 py-6 group-hover:animate-hover-effect">
            <div className="flex flex-row items-center text-lg text-white">
                <p>{title}</p>
                <img src={InfoIcon} alt="info" className='w-4 h-4 ml-3'></img>
            </div>
            <div className="text-sm text-text-gray pt-3">
                <p>{description}</p>
            </div>
        </div>
    );
}