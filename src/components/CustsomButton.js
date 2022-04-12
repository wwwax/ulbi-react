export default function CustsomButton({ children, onClick, addStyles }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 text-white uppercase font-fira_bold ${addStyles}`}
    >
      {children}
    </button>
  );
}
