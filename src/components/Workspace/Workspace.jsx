import { useContext } from "react";
import { AppContext } from "../App/App";
import moment from "moment";
import css from "./Workspace.module.css";

export const WorkSpace = () => {
  const {
    selectedItem,
    updateItem,
    isEdit,
    isEditChange,
    editedText,
    updateEditedText,
  } = useContext(AppContext);

  return (
    <div className={css.wrap}>
      {selectedItem?.time && (
        <p className={css.time}>{moment(selectedItem?.time).format("LLL")}</p>
      )}

      <p className={css.text}>{editedText || selectedItem?.text}</p>

      {isEdit && selectedItem && (
        <textarea
          value={editedText || selectedItem?.text}
          onChange={(event) => updateEditedText(event.target.value)}
          onBlur={() => {
            updateItem(selectedItem.id, editedText);
            isEditChange();
          }}
          autoFocus
          placeholder="write your note"
          className={css.textarea}
        />
      )}
    </div>
  );
};
