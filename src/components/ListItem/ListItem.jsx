import css from "./ListItem.module.css";

export const ListItem = ({ onItemClick, isActive }) => {
  return (
    <li
      className={`${css.item} ${isActive ? css.itemSelected : ""}`}
      onClick={onItemClick}
    ></li>
  );
};
