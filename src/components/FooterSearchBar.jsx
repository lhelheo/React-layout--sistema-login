import React from 'react'
import { CornerDownLeft } from 'lucide-react'
import { MoveDown } from 'lucide-react'
import { MoveUp } from 'lucide-react'
import { LogOut } from 'lucide-react'

const styleIcons = 'text-gray-500 bg-white p-1 rounded-lg shadow-md hover:bg-gray-200 cursor-pointer'

const FooterSearchBar = () => {
  return (
    <div className='flex justify-start pl-6 rounded-lg gap-2 py-3 bg-gray-100 bg-opacity-50 relative top-4'>
        <MoveUp className={`${styleIcons}`}/><MoveDown className={`${styleIcons}`}/><p className='mobile:hidden'>Move</p>
        <CornerDownLeft className={`${styleIcons}`}/><p className='mobile:hidden'>Select</p>
        <LogOut className={`${styleIcons}`}/><p className='mobile:hidden'>Quit</p>
        
        
        
    </div>
  )
}

export default FooterSearchBar