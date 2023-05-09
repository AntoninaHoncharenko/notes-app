import { useState, useEffect } from "react";
import css from "./App.module.css";
import { SeachBox } from "../SearchBox/SearchBox";
import { SideBar } from "../Sidebar/Sidebar";
import { WorkSpace } from "../Workspace/Workspace";
import { getNotes, addNote, deleteNote } from "../../api";

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  console.log(selectedItem);

  const onItemClick = (id) => {
    const clickedItem = items.find((item) => item.id === id);
    setSelectedItem(clickedItem === selectedItem ? null : clickedItem);
    return items.map((item) => ({ ...item }));
  };

  const addItem = () => {
    async function postItem() {
      try {
        const result = await addNote();
        const data = {
          id: result.id,
          text: "",
          time: result.values.ddI1PAwujbW4FdNSkSW4rl,
        };
        setItems([...items, data]);
      } catch (error) {
        console.log(error);
      }
    }
    postItem();
  };

  const deleteItem = (id) => {
    async function deleteItem() {
      try {
        await deleteNote(id);
        setItems(items.map((item) => item).filter((item) => item.id !== id));
        setSelectedItem(null);
      } catch (error) {
        console.log(error);
      }
    }
    deleteItem();
  };

  useEffect(() => {
    async function getAllNotes() {
      try {
        const result = await getNotes();
        const data = result.map((item) => {
          return {
            id: item.id,
            text: item.values.cVDmkBbdTktyoPl8kKnu9U,
            time: item.values.ddI1PAwujbW4FdNSkSW4rl,
          };
        });
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllNotes();
  }, []);

  return (
    <>
      <SeachBox
        addItem={addItem}
        selectedItem={selectedItem}
        deleteItem={deleteItem}
      />
      <main className={css.container}>
        <div className={css.wrap}>
          <SideBar
            onItemClick={onItemClick}
            items={items}
            selectedItem={selectedItem}
          />
          <WorkSpace selectedItem={selectedItem} />
        </div>
      </main>
    </>
  );
}

export default App;
