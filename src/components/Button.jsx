const Button = ({Icon1, Icon2, label}) => {

    const textColor = 'text-gray-500';
    const buttonStyle = 'flex justify-between w-full px-4 py-4 hover:bg-gray-100';
    const hoverStyle = 'hover:bg-green-100';
  return (
      <button className={buttonStyle}>
        <div className='flex'>
          {Icon1 && <Icon1 className={textColor}/>}
          <p className={textColor}>{label}</p>
        </div>
              
          {Icon2 && <Icon2 className={textColor} />}      
      </button>
  )
}

export default Button