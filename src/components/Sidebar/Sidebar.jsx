import { useContext } from "react";
import { AppContext } from "../App/App";
import { ListItem } from "../ListItem/ListItem";
import css from "./Sidebar.module.css";

export const SideBar = () => {
  const { onItemClick, filteredItems } = useContext(AppContext);

  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {filteredItems?.map((item) => (
          <ListItem key={item.id} onItemClick={onItemClick} item={item} />
        ))}
      </ul>
    </div>
  );
};
