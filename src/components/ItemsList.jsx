const ItemsList = ({ items }) => {
  return (
    <button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </button>
  );
};

export default ItemsList;