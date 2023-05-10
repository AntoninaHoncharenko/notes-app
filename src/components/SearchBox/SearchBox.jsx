import { useState, useContext } from "react";
import { AppContext } from "../App/App";
import { Modal } from "./Modal";
import css from "./SearchBox.module.css";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { RiEditBoxLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

export const SeachBox = () => {
  const { addItem, updateItem, filterItems, selectedItem } =
    useContext(AppContext);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <header className={css.header}>
      <div className={css.wrap}>
        <div className={css.btnWrap}>
          <button className={css.button} onClick={addItem}>
            <IoMdAdd size="20" />
          </button>
          <button
            className={selectedItem ? css.button : css.disabledButton}
            onClick={() => {
              openModal(true);
            }}
            disabled={selectedItem ? false : true}
          >
            <AiOutlineDelete size="20" />
          </button>
          <button
            className={selectedItem ? css.button : css.disabledButton}
            onClick={() => updateItem(selectedItem.id)}
            disabled={selectedItem ? false : true}
          >
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
            onChange={(e) => filterItems(e.target.value)}
          />
        </div>
      </div>
      {isOpenModal && <Modal closeModal={closeModal} />}
    </header>
  );
};
