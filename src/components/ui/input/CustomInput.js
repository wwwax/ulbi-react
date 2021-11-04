import style from "./CustomInput.module.css";

const CustomInput = (props) => {
  return <input {...props} className={style.customInput} />;
};

export default CustomInput;
