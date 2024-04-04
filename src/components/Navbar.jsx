import './Navbar.jsx'
import { CircleHelp } from 'lucide-react';
import { Bell } from 'lucide-react';
import BackButton from './BackButton.jsx';
import FowardButton from './FowardButton.jsx';
import RealoadPage from './RealoadPage.jsx';

function Navbar() {

  const colorIconsNavbar = "text-gray-500";
  return (
    <div className='flex justify-between w-full items-center'>
        <div className={`flex items-center text-gray-500 gap-1 ${colorIconsNavbar}`}>
          <BackButton />
          <FowardButton />
          <RealoadPage />         
        </div>

        <div className='flex gap-2 items-center p-2 w-96 desktop:w-2/7'> 
          <input type="text" placeholder="Pesquise aqui..." className='border-2 pl-2 rounded border-gray-400 w-[100%]'/>
          <CircleHelp strokeWidth={2.5} className={`flex items-center gap-2 ${colorIconsNavbar}`}/>
          <Bell strokeWidth={2.5} className={`flex items-center gap-2 ${colorIconsNavbar}`}/>
        </div>
      
    </div>
  )
}

export default Navbar
