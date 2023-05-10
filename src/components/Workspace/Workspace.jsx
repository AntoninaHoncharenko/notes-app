import { useContext } from "react";
import { AppContext } from "../App/App";
import moment from "moment";
import css from "./Workspace.module.css";

export const WorkSpace = () => {
  const { selectedItem } = useContext(AppContext);
  return (
    <div className={css.wrap}>
      <p className={css.time}>{moment(selectedItem?.time).format("LLL")}</p>
      <p className={css.text}>{selectedItem?.text}</p>
    </div>
  );
};
