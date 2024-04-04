import React, { useState } from 'react';
import { CircleHelp } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Link } from 'lucide-react';
import { SquareArrowOutDownRight } from 'lucide-react';
import { ArrowDownToLine } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Search } from 'lucide-react';
import { X } from 'lucide-react';
import { Tally3 } from 'lucide-react';
import FooterSearchBar from './FooterSearchBar';

const ModalSearchBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Estado para controlar qual dropdown está aberto

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Lista de objetos com ícone e título
  const items = [
    { icon: <CircleHelp strokeWidth={2.5} className='bg-slate-200 rounded-full text-white p-1'/>, title: "Ajuda" },
    { icon: <Bell strokeWidth={2.5} className='bg-gray-200 rounded-full text-white p-1'/>, title: "Notificações" },
    { icon: <CircleHelp strokeWidth={2.5} className='bg-gray-200 rounded-full text-white p-1'/>, title: "Central" },
    // Adicione mais itens conforme necessário
  ];
  
  const filterSearchBar = 'px-3 py-0.5 bg-gray-50 border border-gray-300 rounded-full shadow-md flex items-center gap-1';
  const optionsSearchBar = 'hover:bg-gray-100 hover:rounded-md'
  // Função para alternar o estado do dropdown
  const toggleDropdown = (index) => {
    if (dropdownOpen === index) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(index);
    }
  };

  return (
    <>
      <div className='flex gap-2 items-center p-2 w-96 desktop:w-2/7' onClick={openModal}> 
        <input type="text" placeholder="Pesquise aqui..." className='border-2 pl-2 rounded border-gray-400 w-[100%]'/>
        <CircleHelp strokeWidth={2.5} className={`flex items-center gap-2 `}/>
        <Bell strokeWidth={2.5} className={`flex items-center gap-2 `}/>
      </div>
      
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full  flex justify-center items-center bg-black ml-36 mobile:ml-10 bg-opacity-50">
          <div className="relative bg-white w-[50%] py-4 h-auto rounded shadow-lg">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="w-full p-2 pl-10 border border-gray-300 rounded mb-4 absolute -top-14"
            />
            <Search className='relative -top-16 -right-2 text-gray-500'/>
            <p className='relative w-max -top-7 -right-3 font-semibold'>Searching for</p>
            <div className='relative -top-5 -right-3 flex gap-2 flex-wrap mr-6'>
              <button className={`${filterSearchBar}`}>Analytics<X  className='w-4'/></button>
              <button className={`${filterSearchBar}`}>Button<X  className='w-4'/></button>
              <button className={`${filterSearchBar}`}>Watchlist<X  className='w-4'/></button>
              <button className={`${filterSearchBar}`}>Keywords<X  className='w-4'/></button>
              <button className={`${filterSearchBar}`}>Add new</button>
            </div> 

            <hr className='pb-4 w-[96%] flex mx-auto'/>
            {items.map((item, index) => (
              <div key={index} className="flex items-center hover:bg-gray-100 px-6 justify-between gap-2 mb-2 relative">
                <div className="flex items-center gap-2 ">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {dropdownOpen !== index && (
                  <button onClick={() => toggleDropdown(index)} className="flex gap-6 rounded-full px-1">
                    <p className='rounded-full shadow-md px-1 mobile:hidden'>1,210 Sales</p> 
                    <Tally3 className='text-gray-300'/>
                  </button>
                )}
                {dropdownOpen === index && (
                  <div className="absolute z-50 top-0 left-0 w-full h-full flex justify-center items-center bg-gray-100 bg-opacity-50">
                  <div className="absolute top-6 right-7 bg-white border border-gray-300 p-2 rounded">
                    <div className="flex flex-col items-start gap-2">
                      <div className={`flex justify-start gap-2 items-center w-full ${optionsSearchBar}`}>
                        <Link className='w-3 mx-1'/>
                        <p className='text-sm'>Copy Link</p>
                      </div>
                      <div className={`flex justify-start gap-2 items-center w-full ${optionsSearchBar}`}>
                        <SquareArrowOutDownRight className='w-3 mx-1'/>
                        <p className='text-sm'>Save Product</p>
                      </div>
                      <div className={`flex justify-start gap-2 items-center w-full ${optionsSearchBar}`}>
                        <ArrowDownToLine className='w-3 mx-1'/>
                        <p className='text-sm'>Go to Product</p>
                      </div>
                      <div className={`flex justify-start gap-2 items-center w-full ${optionsSearchBar}`}>
                        <Trash2 className='w-3 mx-1'/>
                        <p className='text-sm'>Remove from List</p>
                      </div>
                    </div>
                  </div>
                </div>
                )}
              </div>
            ))}
            <button onClick={closeModal} className="absolute -top-8 right-6 -mt-4 -mr-4 border border-gray-300  rounded-md p-0.5">
              <p className='text-gray-500'>
                <X />
              </p>
            </button>
            <FooterSearchBar />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSearchBar;
