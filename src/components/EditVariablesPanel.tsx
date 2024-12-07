import { MouseEventHandler, useState } from "react";
import Button from "./Button";
import VariableTab from "./VariableTab";
import VariableButton from "./VariableButton";
import HoverCard from "./HoverCard";

interface EditVariablesProps {
    isOpen: boolean,
    togglePanel: MouseEventHandler,
}

export default function EditVariablesPanel({isOpen, togglePanel} : EditVariablesProps) {
    const [isHovering, setIsHovering] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
    const [isSelected, setSelected] = useState(false);

    const handleMouseEnter = () => {
        const timeout = setTimeout(() => {
          setIsHovering(true);
        }, 1500);
        setHoverTimeout(timeout);
      };
    
      const handleMouseLeave = () => {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
        }
        setIsHovering(false);
      };
    const handleSelect = () => setSelected(!isSelected);

    return (
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-black border border-light-gray text-white transition-all transition-transform ease-in-out delay-150 duration-700 ${
          isOpen ? 'translate-x-0' : 'translate-x-1'
        }`}
      >
        <div className="px-9 pb-8 pt-11 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Edit Variables</h2>
          <button
            onClick={togglePanel}
            className="text-white"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col overflow-y-auto h-[calc(100vh-64px)] pb-10">
            <div className="flex flex-row space-x-2 px-9">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-3/5 px-4 py-2 rounded-md bg-dark-gray text-sm text-white border border-light-gray focus:outline-none"
                />
                <Button size={"medium"} type={"secondary"}>Autofill</Button>
                <Button size={"medium"} type={"secondary"}>Rerun</Button>
            </div>
    
            <div className="p-9 mr-14 overflow-y-auto">
                <div className="bg-dark-gray border border-light-gray rounded p-6">
                    <h3 className="text-sm">Variable Category 1</h3>
                    <div className="flex flex-wrap gap-5 mt-4">
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-pointer">
                            <VariableButton title="Carbon 1" selected={false} onClick={handleSelect}/>
                        </div>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-pointer">
                            <VariableButton title="Co2 Distribution" selected={true} onClick={handleSelect}/>
                        </div>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-pointer">
                            <VariableButton title="Fleet Sizing" selected={true} onClick={handleSelect}/>
                        </div>
                    </div>
            
                    <h3 className="text-sm mt-4">Variable Category 2</h3>
                    <div className="flex flex-wrap gap-5 mt-4">
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-pointer">
                            <VariableButton title="Parking Rate" selected={false} onClick={handleSelect}/>
                        </div>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-pointer">
                            <VariableButton title="Border Rate" selected={true} onClick={handleSelect}/>
                        </div>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-pointer">
                            <VariableButton title="Request Rate" selected={true} onClick={handleSelect}/>
                        </div>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-pointer">
                            <VariableButton title="Variable 1" selected={false} onClick={handleSelect}/>
                        </div>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-pointer">
                            <VariableButton title="Variable 1" selected={false} onClick={handleSelect}/>
                        </div>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-pointer">
                            <VariableButton title="Variable 1" selected={true} onClick={handleSelect}/>
                        </div>
                    </div>

                    <h3 className="text-sm mt-4">Variable Category 3</h3>
                    <div className="flex flex-wrap gap-5 mt-4">
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-pointer">
                            <VariableButton title="Variable 1" selected={false} onClick={handleSelect}/>
                        </div>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-pointer">
                            <VariableButton title="Variable 1" selected={true} onClick={handleSelect}/>
                        </div>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-pointer">
                            <VariableButton title="Variable 1" selected={true} onClick={handleSelect}/>
                        </div>
                    </div>
                </div>
                { isHovering &&
                    <div className={`transition-opacity duration-500 ease-in-out 
                    ${isHovering ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}>
                        <HoverCard 
                            title={"Co2 Distribution"} 
                            description={"But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you're a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle."} 
                        />
                    </div>
                }
                <VariableTab title="Primary Variables"/>
                <VariableTab title="Secondary Variables"/>
            </div>
        </div>
      </div>
    );
  }
  