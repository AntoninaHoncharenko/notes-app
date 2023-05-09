import css from "./ListItem.module.css";

export const ListItem = ({ item, onItemClick, selectedItem }) => {
  return (
    <li
      className={`${css.item} ${
        selectedItem?.id === item.id ? css.itemSelected : ""
      }`}
      onClick={() => onItemClick(item.id)}
    >
      <p>{item.text}</p>
      <p>{item.time}</p>
    </li>
  );
};
