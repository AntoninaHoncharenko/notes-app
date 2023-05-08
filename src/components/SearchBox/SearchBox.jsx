import { IoMdAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { RiEditBoxLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import css from "./SearchBox.module.css";

export const SeachBox = ({ isActive }) => {
  return (
    <header className={css.header}>
      <div className={css.wrap}>
        <div className={css.btnWrap}>
          <button className={css.button}>
            <IoMdAdd size="20" />
          </button>
          <button className={css.button} disabled={isActive ? false : true}>
            <AiOutlineDelete size="20" />
          </button>
          <button className={css.button} disabled={isActive ? false : true}>
            <RiEditBoxLine size="20" />
          </button>
        </div>
        <div className={css.inputWrap}>
          <label htmlFor="search" className={css.label}>
            <BiSearch size="20" className={css.svg} />
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search"
            className={css.input}
          />
        </div>
      </div>
    </header>
  );
};
