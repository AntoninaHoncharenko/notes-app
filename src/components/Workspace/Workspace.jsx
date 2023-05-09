import css from "./Workspace.module.css";

export const WorkSpace = ({ selectedItem }) => {
  return (
    <div className={css.wrap}>
      <p className={css.time}>{selectedItem?.time}</p>
      <p className={css.text}>{selectedItem?.text}</p>
    </div>
  );
};
