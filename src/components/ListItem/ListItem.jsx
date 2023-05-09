import css from "./ListItem.module.css";

export const ListItem = ({ item, onItemClick, selectedItem }) => {
  return (
    <li
      className={`${css.item} ${
        selectedItem?.id === item.id ? css.itemSelected : ""
      }`}
      onClick={() => onItemClick(item.id)}
    >
      <p className={css.text}>{item.text}</p>
      <p className={css.time}>{item.time}</p>
    </li>
  );
};
