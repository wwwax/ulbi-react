export default function CustsomButton({ children, onClick }) {
  return <button className="bg-primary px-5 py-2 text-white font-consolas" onClick={onClick}>{children}</button>;
}
