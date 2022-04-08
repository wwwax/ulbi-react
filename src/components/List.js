import CustsomButton from "./CustsomButton";

export default function List({ data, deleteItem }) {
  return (
    <div className="list">
      {data.map((item) => (
        <div className="list__item" key={item.id}>
          <div className="list__item-header">
            <span className="list__item-header_id">{item.id}</span>
            <span className="list__item-header_title">{item.title}</span>
          </div>

          <div className="list__btn-wrapper">
            <CustsomButton primary>Open</CustsomButton>
            <CustsomButton onClick={() => deleteItem(item.id)}>
              Delete
            </CustsomButton>
          </div>
        </div>
      ))}
    </div>
  );
}
