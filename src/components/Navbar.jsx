import './Navbar.jsx'
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { RefreshCw } from 'lucide-react';
import { CircleHelp } from 'lucide-react';
import { Bell } from 'lucide-react';

function Navbar() {

  const colorIconsNavbar = "text-gray-500";
  return (
    <div className='flex justify-between w-full items-center'>
        <div className={`flex items-center gap-1 ${colorIconsNavbar}`}>
          <ArrowLeft strokeWidth={2.5}/>
          <ArrowRight strokeWidth={2.5}/>
          <RefreshCw className='ml-3' strokeWidth={2.5}/> 
        </div>

        <div className='flex gap-2 items-center p-2 desktop:w-[30%]'> 
          <input type="text" placeholder="Pesquise aqui..." className='border-2 pl-2 rounded border-gray-400 w-[100%]'/>
          <CircleHelp strokeWidth={2.5} className={`flex items-center gap-2 ${colorIconsNavbar}`}/>
          <Bell strokeWidth={2.5} className={`flex items-center gap-2 ${colorIconsNavbar}`}/>
        </div>
      
    </div>
  )
}

export default Navbar
