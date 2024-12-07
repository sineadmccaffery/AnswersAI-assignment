
interface IconButtonProps {
    icon: string;
    text: string;
    type: 'primary' | 'secondary',
    onClick?: () => void;
}

export default function IconButton({icon, text, type, onClick} : IconButtonProps) {
    let colorClass: string;
    switch (type) {
        case 'primary':
          colorClass = 'bg-black hover:bg-gray hover:border hover:border-light-gray active:bg-light-gray';
          break;
        case 'secondary':
          colorClass = 'bg-gray border border-light-gray hover:bg-light-gray hover:border-white active:bg-light-gray';
          break;
    }
    return (
        <button onClick={onClick} className={`${colorClass} w-8 h-8 p-1 sm:w-10 sm:h-10 sm:p-2 rounded-md flex items-center justify-items-center`}>
            <img src={icon} alt={text} className="w-6 h-6 pt-1"></img>
        </button>
    );
}