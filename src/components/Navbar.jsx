import './Navbar.jsx'
import { CircleHelp } from 'lucide-react';
import { Bell } from 'lucide-react';
import BackButton from './BackButton.jsx';
import FowardButton from './FowardButton.jsx';
import RealoadPage from './RealoadPage.jsx';
import ModalSearchBar from './ModalSearchBar.jsx';

function Navbar() {

  const colorIconsNavbar = "text-gray-500";
  return (
    <div className='flex justify-between w-full items-center'>
        <div className={`flex items-center text-gray-500 gap-1 ${colorIconsNavbar}`}>
          <BackButton />
          <FowardButton />
          <RealoadPage />       
        </div>
        <ModalSearchBar />
    </div>
  )
}

export default Navbar
