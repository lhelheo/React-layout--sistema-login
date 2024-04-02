import './Navbar.jsx'
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { RefreshCw } from 'lucide-react';
import { CircleHelp } from 'lucide-react';
import { Bell } from 'lucide-react';

function Navbar() {

  return (
    <>
        <div className='navbar-container--leftbuttons flex gap-2'>
          <ArrowLeft />
          <ArrowRight />
          <RefreshCw /> 
        </div>

        <div className='navbar-container--rightbuttons flex gap-2'>
          <input type="text" placeholder="Pesquise aqui..." className='border-2 border-gray-400 w-80'/>
          <CircleHelp />
          <Bell />
        </div>
      
    </>
  )
}

export default Navbar
