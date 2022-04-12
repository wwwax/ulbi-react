export default function CustsomButton({ children, onClick, buttonType }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 text-white uppercase font-fira_bold ${buttonType}`}
    >
      {children}
    </button>
  );
}
