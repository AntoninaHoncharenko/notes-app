import { useContext } from "react";
import { AppContext } from "../App/App";
import moment from "moment";
import css from "./ListItem.module.css";

export const ListItem = ({ item }) => {
  const { onItemClick, selectedItem } = useContext(AppContext);
  const currentTime = moment();
  const itemTime = moment(item.time);
  const isToday = moment(itemTime).isSame(currentTime, "day");

  return (
    <li
      className={`${css.item} ${
        selectedItem?.id === item.id ? css.itemSelected : ""
      }`}
      onClick={() => onItemClick(item.id)}
    >
      <p className={css.text}>{item.text}</p>
      <p className={css.time}>
        {isToday ? moment(itemTime).format("LT") : moment(itemTime).format("l")}
      </p>
    </li>
  );
};
