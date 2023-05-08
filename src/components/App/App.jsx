import { useState } from "react";
import css from "./App.module.css";
import { SeachBox } from "../SearchBox/SearchBox";
import { SideBar } from "../Sidebar/Sidebar";
import { WorkSpace } from "../Workspace/Workspace";

function App() {
  const [isActive, setIsActive] = useState(false);

  const onItemClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <SeachBox isActive={isActive} />
      <main className={css.container}>
        <div className={css.wrap}>
          <SideBar onItemClick={onItemClick} isActive={isActive} />
          <WorkSpace />
        </div>
      </main>
    </>
  );
}

export default App;
