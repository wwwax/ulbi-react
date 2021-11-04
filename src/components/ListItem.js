const ListItem = ({ item }) => {
  return (
    <li className="list-item">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <button>delete</button>
    </li>
  );
};

export default ListItem;
