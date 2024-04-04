import { Link } from 'react-router-dom';

const ItemsList = ({ items , links}) => {
  return (
    <button className="w-full flex justify-center mobile:bg-primary-500  mobile:border-primary-500 rounded-md  mobile:w-auto px-7">
      
      <ul className="w-full">
      {items.map((item, index) => (
        <li key={index} className="mobile:text-white pb-1 text-left text-gray-500 text-lg mobile:text-sm text-nowrap list-disc">
          <Link to={links[index]} className='hover:text-primary-500'>{item}</Link>
        </li>
      ))}
    </ul> 
      
    </button>
  );
};

export default ItemsList;