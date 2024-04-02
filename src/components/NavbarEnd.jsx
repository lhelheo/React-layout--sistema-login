import { Bolt } from 'lucide-react';
import Button from './Button';

const NavbarEnd = () => {
  return (
    <div className='flex justify-between pl-4 pb-4 items-center w-full mt-2'>
        <div className='flex items-center'>
            <div className='bg-gray-300 rounded-3xl p-3'>
                <p className='text-xl text-gray-700'>JD</p>    
            </div>
            <div className='flex flex-col pl-3 px-8'>
                <p className='font-bold text-sm text-gray-700'>John Doe</p>
                <p className='text-sm text-gray-700'>Admin</p>
            </div>
        </div>
        <div>
            <Button Icon1={Bolt} Icon2={''} label="" />
        </div>
    </div>
  )
}

export default NavbarEnd