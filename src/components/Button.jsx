import { useState } from "react";

const Button = ({ Icon1, Icon2, label, onClick }) => {
  const [isIconRotated, setIsIconRotated] = useState(false); // Estado para controlar a rotação do Icon2
  const [isSelected, setIsSelected] = useState(false); // Estado para controlar a aplicação da cor primary-500

  // Classes CSS
  const iconAndTextClass = 'text-gray-500 mr-2 font-semibold text-xl';
  const buttonStyle = 'flex justify-between w-full py-2 mx-auto items-center';
  const hoverClass = 'group-hover:text-primary-500';
  const selectedClass = isSelected ? 'text-primary-500' : ''; // Classe para aplicar a cor primary-500 quando selecionado
  const rotateClass = isIconRotated ? '-rotate-90' : ''; // Classe para controlar a rotação

  // Função para manipular o clique, alternando a rotação de Icon2 e a aplicação da cor primary-500
  const handleOnClick = () => {
    setIsIconRotated(!isIconRotated); // Alterna o estado de rotação de Icon2
    setIsSelected(!isSelected); // Alterna o estado de seleção para aplicar a cor primary-500
    if(onClick) onClick(); // Se houver outra função onClick passada como prop, executa-a
  };

  return (
    <button className={`${buttonStyle} group`} onClick={handleOnClick}>
      <div className='flex items-center'>
        {Icon1 && <Icon1 className={`${iconAndTextClass} ${selectedClass} ${hoverClass}`}/>}
        <p className={`${iconAndTextClass} ${hoverClass} ${selectedClass} mobile:hidden`}>{label}</p> {/* Aplica a cor primary-500 conforme o estado isSelected */}
      </div>
      {Icon2 && <Icon2 className={`${iconAndTextClass} ${selectedClass} ${hoverClass} ${rotateClass} mobile:hidden`} />} {/* Aplica a rotação a Icon2 */}
    </button>
  );
};

export default Button;
