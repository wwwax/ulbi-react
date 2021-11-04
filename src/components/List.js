import ListItem from "./ListItem";

const List = ({ items, title }) => {
  return (
    <div className="list">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default List;
