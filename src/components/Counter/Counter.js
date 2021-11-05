import { useState } from "react";
import CustomButton from "../UI/CustomButton";
import style from "./Counter.module.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((counter) => counter + 1);
  };

  const decrement = () => {
    setCounter((counter) => counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className={style.counter}>
      <h2 className={style.counter__title}>Counter: {counter}</h2>
      <div className={style.counter__btnWrapper}>
        <CustomButton onClick={decrement} disabled>dec</CustomButton>
        <CustomButton onClick={reset}>res</CustomButton>
        <CustomButton onClick={increment}>inc</CustomButton>
      </div>
    </div>
  );
}

export default Counter;
