const Button = ({ Icon1, Icon2, label, onClick }) => {
  const iconAndTextClass = 'text-gray-500 mr-2 text-2xl';
  const buttonStyle = 'flex justify-between w-full pl-6 py-2 mx-auto items-center';
  const hoverClass = 'group-hover:text-lime-400';

  return (
    <button className={`${buttonStyle} group`} onClick={onClick}>

      <div className='flex items-center'>
        {Icon1 && <Icon1 className={`${iconAndTextClass} ${hoverClass}`}/>}
        <p className={`${iconAndTextClass} ${hoverClass} mobile:hidden`}>{label}</p>
      </div>
      {Icon2 && <Icon2 className={`${iconAndTextClass} ${hoverClass} mobile:hidden`} />}
      
    </button>
  );
}

export default Button;
