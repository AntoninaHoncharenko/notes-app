import { ListItem } from "../ListItem/ListItem";
import css from "./Sidebar.module.css";

export const SideBar = ({ onItemClick, isActive }) => {
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        <ListItem onItemClick={onItemClick} isActive={isActive} />
      </ul>
    </div>
  );
};
