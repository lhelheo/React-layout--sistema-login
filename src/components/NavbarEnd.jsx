import { Bolt } from 'lucide-react';
import Button from './Button';

const NavbarEnd = () => {
  return (
    <div>
    <div className='flex justify-between items-center bg-stone-100 p-1 mb-4 mobile:hidden'>
        <div className='flex items-center'>
            <div className='bg-gray-300 rounded-full w-10 h-10 m-1 flex items-center justify-center'>
                <p className='text-xl text-gray-700'>JD</p>    
            </div>
            <div className='flex flex-col pl-3 px-8'>
                <p className='font-bold text-sm text-gray-700'>John Doe</p>
                <p className='text-xs text-gray-700'>Admin</p>
            </div>
        </div>
        <div>
            <Button Icon1={Bolt} Icon2={''} label=""  />
        </div>

    </div>

        <div className='desktop:hidden flex justify-center items-center w-full'>
            <Button Icon1={Bolt} Icon2={''} label=""  />
        </div>
    </div>
  )
}

export default NavbarEnd