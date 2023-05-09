import css from "./Workspace.module.css";

export const WorkSpace = ({ selectedItem }) => {
  return (
    <div className={css.wrap}>
      <p>{selectedItem?.time}</p>
      <p>{selectedItem?.text}</p>
    </div>
  );
};
