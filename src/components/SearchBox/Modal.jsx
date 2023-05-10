import { useContext } from "react";
import { AppContext } from "../App/App";
import css from "./Modal.module.css";

export const Modal = ({ closeModal }) => {
  const { selectedItem, deleteItem } = useContext(AppContext);
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <p className={css.text}>Please, confirm deleting</p>
        <div className={css.btnWrap}>
          <button
            type="button"
            className={css.btn}
            onClick={() => {
              deleteItem(selectedItem.id);
              closeModal();
            }}
          >
            Confirm
          </button>
          <button
            type="button"
            className={css.btn}
            onClick={() => closeModal()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
