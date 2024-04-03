import { Bolt } from 'lucide-react';
import Button from './Button';

const SidebarEnd = () => {
  return (
    <div>
        <div className='flex justify-center items-center bg-stone-100 mb-4 mobile:hidden '>
            <div className='flex  items-center'>
                <div className='bg-gray-300 rounded-full w-10 h-10 m-1 flex items-center justify-center'>
                    <p className='text-xl text-gray-700'>JD</p>    
                </div>
                <div className='flex flex-col px-8'>
                    <p className='font-bold text-sm text-gray-700'>John Doe</p>
                    <p className='text-xs text-gray-700'>Admin</p>
                </div>
            </div>
            <div>
                <Button Icon1={Bolt} Icon2={''} label=""  />
            </div>
        </div>
        <div className='desktop:hidden flex justify-center items-center w-full'> 
            <Button Icon1={Bolt} Icon2={''} label="" className="w-full p-0" />
        </div>
    </div>
  )
}

export default SidebarEnd