const Button = ({ Icon1, Icon2, label, onClick }) => {
  const iconAndTextClass = 'text-gray-500 mr-2 font-semibold text-xl';
  const buttonStyle = 'flex justify-between w-full py-2 mx-auto items-center';
  const hoverClass = 'group-hover:text-primary-500';
  
  return (
    <ul className={`${buttonStyle} group`} onClick={onClick}>
      <li className="flex w-full justify-between">
        <div className='flex items-center'>
          {Icon1 && <Icon1 strokeWidth={2.4} className={`${iconAndTextClass} ${hoverClass}`}/>}
          <p className={`${iconAndTextClass} ${hoverClass} mobile:hidden`}>{label}</p>
        </div>
        {Icon2 && <Icon2 strokeWidth={2.6} className={`-rotate-90 transform duration-500 ${iconAndTextClass} ${hoverClass} mobile:hidden flex items-center h-8`} />}
      </li>
    </ul>
  );
}

export default Button;
