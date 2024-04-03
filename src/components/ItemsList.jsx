import { Link } from 'react-router-dom';

const ItemsList = ({ items , links}) => {
  return (
    <button className="w-full flex justify-center mobile:w-auto pl-10">
      
      <ul className="w-full">
      {items.map((item, index) => (
        <li key={index} className="text-left text-lg list-disc">
          <Link to={links[index]} className='hover:text-primary-500'>{item}</Link>
        </li>
      ))}
    </ul>
      
    </button>
  );
};

export default ItemsList;