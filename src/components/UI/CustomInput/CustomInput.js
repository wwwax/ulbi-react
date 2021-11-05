import React from "react";
import style from "./CustomInput.module.css";

const CustomInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={style.customInput} />;
});

export default CustomInput;
