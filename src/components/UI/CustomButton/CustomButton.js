import style from "./CustomButton.module.css";

function CustomButton({ children, ...props }) {
  console.log(props);

  return (
    <button {...props} className={style.customButton}>
      {children}
    </button>
  );
}

export default CustomButton;
