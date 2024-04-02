import LogoMarca from '../assets/logomarca.png'
import { Home } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CircleHelp } from 'lucide-react';
import { Users } from 'lucide-react';
import { Grid2X2 } from 'lucide-react';
import { Zap } from 'lucide-react';
import Button from './Button';


const Sidebar = () => {
    
  return (
    <div className='flex flex-col items-start fixed top-0 left-0 z-10 w-64 h-full bg-white border-r border-green-300'>
          
          <img src={LogoMarca} className='h-14 w-28 my-4 mx-4' alt="Descrição da imagem" />
          
          <Button Icon1={Home} Icon2={''} label="Início" />
          <Button Icon1={Users} Icon2={ChevronLeft} label="Clientes" />
          <Button Icon1={Grid2X2} Icon2={''} label="Contas" />
          <Button Icon1={Zap} Icon2={''} label="Gestão" />
          <Button Icon1={Shield} Icon2={''} label="Administrador" />
          <Button Icon1={CircleHelp} Icon2={''} label="Suporte" />

          <div className='flex items-center mt-auto px-4 py-4'>
            <div className='bg-gray-300 rounded-3xl p-3'>
              <p className='text-2xl text-gray-700'>JD</p>
            </div>

            <div className='flex flex-col pl-3'>
              <p className='font-bold text-gray-700'>John Doe</p>
              <p className='italic text-gray-700'>Admin</p>
            </div>
          </div>
          
        </div>
  )
}

export default Sidebar