import { MouseEvent, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Graph from './components/Graph';
import PerformanceCard from './components/PerformanceCard';

import LightningIcon from './assets/icon-lightning.svg';
import SparkleIcon from './assets/icon-sparkle.svg';
import IconButton from './components/IconButton';
import ClockIcon from './assets/icon-clock.svg';
import DownloadIcon from './assets/icon-download.svg';
import Button from './components/Button';
import DotsIcon from './assets/icon-dots.svg';
import ArrowIcon from './assets/icon-arrow.svg';
import EditVariablesPanel from './components/EditVariablesPanel';

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  const handleToggle = () => {
    setInfoOpen(!infoOpen);
  };
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="flex bg-dark-gray h-fit">
      <span>
        <div className="flex-1 flex flex-col bg-dark-gray">
          <Navbar onClick={handleViewSidebar} />
        </div>
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} />
        </div>
        {isPanelOpen &&
          <div>
            <EditVariablesPanel isOpen={true} togglePanel={togglePanel}/>
          </div>
        }
      </span>
        <main className="mt-[87px] px-10 py-12 w-screen rounded border border-light-gray">
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row'>
                <img src={LightningIcon} alt="Lightning" className="w-4 h-7 mr-4"></img>
                <h1 className="text-4xl text-white font-body font-bold mb-4">Charging Station</h1>
              </div>
              <div className='flex flex-row items-center space-x-3'>
                  <IconButton icon={ClockIcon} text={'Clock'} type="secondary"/>
                  <Button size='medium' type="secondary" onClick={togglePanel}>Edit Variables</Button>
                  <IconButton icon={DownloadIcon} text={'Downlaod'} type="secondary"/>
              </div>
            </div>
            <div className='flex flex-row pt-4 justify-between'>
              <div className='flex flex-row'>
                <img src={SparkleIcon} alt="Sparkle" className="w-[18px] h-[18px] mr-3"></img>
                <h1 className="text-2xl text-light-green font-body mb-4">Best Scenario Results</h1>
              </div>
              <div>
                <button onClick={handleToggle} className='w-[44px] h-[34px] rounded-full border border-light-green'>
                  <img src={ArrowIcon} alt="^" className="w-4 h-2 ml-4"></img>
                </button>
              </div>
            </div>
            {infoOpen &&
              <div>
                <div className='bg-dark-green border-[0.5px] border-light-green text-green py-4 px-6 rounded-md mt-2'>
                  <div className='flex flex-row justify-between items-center font-sans'>
                    <p>The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.</p>
                    <img src={DotsIcon} alt="..." className="w-4 h-2"></img>
                  </div>
                </div>
                <div className='bg-dark-green border-[0.5px] border-light-green text-green py-4 px-6 rounded-md mt-4'>
                <div className='flex flex-row justify-between items-center font-sans'>
                    <p>The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.</p>
                    <img src={DotsIcon} alt="..." className="w-4 h-2"></img>
                  </div>
                </div>
              </div>
            }
            <div className="flex flex-row flex-wrap sm:flex-nowrap">
              <div className=" text-white text-2xl w-3/5 h-4/5 mt-14">
                <h1>Graphs</h1>
                <div className='bg-gray p-4 rounded border border-light-gray w-full max-w-4xl mt-4'>
                  <Graph />
                </div>
              </div>
              <div className="text-white text-2xl w-2/5 h-4/5 ml-5 mt-14">
                <div className='flex flex-row justify-between'>
                  <h1>Key Performance Indicators</h1>
                  <Button size={'small'} type={'secondary'}>Variables +</Button>
                </div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-x-6 gap-y-6 mt-3 justify-items-stretch'>
                    <PerformanceCard 
                      title="Infrastructure Units" 
                      subtitle="This describes variable two and what the shown data means" 
                      number="€421.07"
                    />
                    <PerformanceCard
                      title="Charging Growth" 
                      subtitle="This describes variable two and what the shown data means" 
                      number="33.07"
                    />
                    <PerformanceCard
                      title="Localization change" 
                      subtitle="This describes variable two and what the shown data means" 
                      number="21.9%"
                    />
                    <PerformanceCard
                      title="Fleet growth" 
                      subtitle="This describes variable two and what the shown data means" 
                      number="7.03%"
                    />
                  </div>
                </div>
              </div>
        </main>
    </div>
  );
}

export default App
