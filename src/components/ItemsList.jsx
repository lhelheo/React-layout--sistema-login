const ItemsList = ({ items }) => {
  return (
    <button className="w-full flex justify-center mobile:w-auto">
      
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-left text-lg list-disc">{item}</li>
        ))}
      </ul>
      
    </button>
  );
};

export default ItemsList;