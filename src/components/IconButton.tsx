
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
        <button onClick={onClick} className={`${colorClass} w-10 h-10 px-2 py-2 rounded-md flex items-center justify-items-center`}>
            <img src={icon} alt={text} className="w-6 h-6 pt-1"></img>
        </button>
    );
}