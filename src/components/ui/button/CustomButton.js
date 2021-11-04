import style from "./CustomButton.module.css";

const CustomButton = ({ children, ...props }) => {
  return (
    <button {...props} className={style.customButton}>
      {children}
    </button>
  );
};

export default CustomButton;
