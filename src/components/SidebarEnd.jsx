import { Bolt } from 'lucide-react';
import Button from './Button';
import { Tooltip } from './Tooltip';
import ContainerSettings from './ContainerSettings';
import { useState } from 'react';

const SidebarEnd = () => {

    const [isSettingsVisible, setIsSettingsVisible] = useState(false);
    const toggleSettingsVisibility = () => {
        setIsSettingsVisible(!isSettingsVisible);
    };

  return (
    <div>
        <Tooltip text={'Sessão Configurações'}>

        <div className='flex items-center justify-between bg-stone-100 mb-8 mobile:hidden mr-2 '>
            <div className='flex items-center'>
                <div className='bg-gray-300 rounded-full w-10 h-10 m-1 flex items-center justify-center'>
                    <p className='text-xl text-gray-700'>JD</p>    
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold text-sm text-gray-700'>John Doe</p>
                    <p className='text-xs text-gray-700'>Admin</p>
                </div>
            </div>
            <div>
                <Button Icon1={Bolt} Icon2={''} label="" onClick={toggleSettingsVisibility} />
            </div>
        </div>
        <div className='desktop:hidden flex justify-center items-center w-full'> 
            <Button Icon1={Bolt} Icon2={''} label="" className="w-full p-0" />
        </div>
        </Tooltip>
        <ContainerSettings isVisible={isSettingsVisible} />
    </div>
  )
}

export default SidebarEnd