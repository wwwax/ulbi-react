export default function CustsomButton({ children, onClick, primary }) {
  return (
    <button
      className={primary ? "btn btn__primary" : "btn btn__secondary"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
