import { CornerDownLeft } from 'lucide-react'
import { MoveUp } from 'lucide-react'
import { LogOut } from 'lucide-react'

const styleIcons = 'text-gray-500 bg-white p-1 rounded-lg shadow-md hover:bg-gray-200 cursor-pointer'
const styleText = 'text-gray-700 mobile:hidden'

const FooterSearchBar = () => {
  return (
    <div className='flex justify-start pl-6 rounded-lg gap-2 py-3 bg-gray-100 bg-opacity-50 relative top-4'>
        <MoveUp className={`${styleIcons}`} /><p className={`${styleText}`}>Move</p>
        <CornerDownLeft className={`${styleIcons}`}/><p className={`${styleText}`}>Select</p>
        <LogOut className={`${styleIcons}`} /><p className={`${styleText}`}>Quit</p>        
    </div>
  )
}

export default FooterSearchBar