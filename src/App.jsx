import './App.jsx'
import Navbar  from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx';
import { Outlet } from "react-router-dom";  
 
function App() {

  return (
    <>
      <div className='flex justify-between ml-64 sm:ml-20  px-2 pt-3 mobile:ml-20 relative'>
        <Navbar />
        <Sidebar />
        <div className='absolute mt-12 w-full'>
        <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
