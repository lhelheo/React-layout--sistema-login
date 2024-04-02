const Button = ({Icon1, Icon2, label}) => {
    const textColor = 'text-gray-500 mr-2 text-2xl';
    const buttonStyle = 'flex justify-between w-full pl-6 py-2 mx-auto hover:bg-gray-100';

  return (
      <button className={buttonStyle}>
        <div className='flex'>
          {Icon1 && <Icon1 className={textColor}/>}
          <p className={textColor}>{label}</p>
        </div>
          {/* <ul>
            <li>abc</li>
            <li>def</li>
            <li>ghi</li>
          </ul> */}
          {Icon2 && <Icon2 className={textColor} />}      
      </button>
  )
}

export default Button