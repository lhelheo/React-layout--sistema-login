import { Zap } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Workflow } from 'lucide-react';
import { File } from 'lucide-react';
import { LogOut } from 'lucide-react';

const ContainerSettings = ({ isVisible }) => {

    const visibilityClass = isVisible ? 'visible' : 'hidden';
  return (
    <div className={`${visibilityClass} border border-gray-300 mobile:border mobile:w-max absolute 
    top-[70%] -right-[85%] mobile:top-[73%]  mobile:left-[70%] w-full bg-white shadow-md p-2 rounded-md`}>
        <div className="flex flex-row gap-2 ">
            <Zap className='bg-gray-400 rounded-full text-white p-1 '/>
            <div className='flex flex-col'>
                <p className='font-semibold text-gray-700'>Usuário 1</p>
                <p className='text-gray-700'>email@gmail.com</p>
            </div>
        </div>

        <div className='pl-3'>
            <span className='flex gap-2 py-1 items-center'>
                <Settings className='w-5 text-gray-700'/>
                <p className='text-sm text-gray-700'>Settings</p>
            </span>
            <span className='flex gap-2 py-1 items-center'>                
                <Workflow className='w-5 text-gray-700'/>
                <p className='text-sm text-gray-700'>Apps & Integrations</p>
            </span>
            <span className='flex gap-2 py-1 items-center'>                
                <File className='w-5 text-gray-700'/>    
                <p className='text-sm text-gray-700'>API & Documentation</p>
            </span>
            <span className='flex gap-2 py-1 items-center'>                
                <LogOut className='w-5 text-gray-700'/>
                <p className='text-sm text-gray-700'>Log out</p>
            </span>
        </div>
    </div>
  )
}

export default ContainerSettings