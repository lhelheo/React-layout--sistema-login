import './App.jsx'
import Navbar  from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx';

function App() {

  return (
    <>
      <div className='navbar-container flex justify-between ml-64 px-2 pt-3'>
        <Navbar />
        <Sidebar />
      </div>
    </>
  )
}

export default App
