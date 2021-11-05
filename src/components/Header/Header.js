import style from "./Header.module.css";
import logo from "../../img/logo.png";

function Header() {
  return (
    <div className={style.header}>
      <img className={style.header__logo} src={logo} alt="logo" />
    </div>
  );
}

export default Header;
