import CustsomButton from "./CustsomButton";

export default function List({ data, deleteItem }) {
  return (
    <div>
      {data.map((item) => (
        <div className="border-4 border-black mb-5 p-5 last:mb-0" key={item.id}>
          <div className="flex text-6xl mb-4 font-beau">
            <span className="mr-2">{item.id}</span>
            <span>{item.title}</span>
          </div>

          <CustsomButton addStyles="bg-primary mr-5">Open</CustsomButton>
          <CustsomButton
            addStyles="bg-secondary"
            onClick={() => deleteItem(item.id)}
          >
            Delete
          </CustsomButton>
        </div>
      ))}
    </div>
  );
}
