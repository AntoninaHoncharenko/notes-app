import { ListItem } from "../ListItem/ListItem";
import css from "./Sidebar.module.css";

export const SideBar = ({ onItemClick, items, selectedItem }) => {
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {items.map((item) => (
          <ListItem
            key={item.id}
            onItemClick={onItemClick}
            item={item}
            selectedItem={selectedItem}
          />
        ))}
      </ul>
    </div>
  );
};
