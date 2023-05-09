import { useState, useEffect } from "react";
import css from "./App.module.css";
import { SeachBox } from "../SearchBox/SearchBox";
import { SideBar } from "../Sidebar/Sidebar";
import { WorkSpace } from "../Workspace/Workspace";
import { getNotes, addNote, deleteNote, UpdateNote } from "../../api";

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function getAllNotes() {
      try {
        const result = await getNotes();
        const data = result.map((item) => {
          return {
            id: item.id,
            text: item.values.chWRxcN8jlW6FcMcZcMviZ
              ? item.values.chWRxcN8jlW6FcMcZcMviZ
              : "",
            time: item.values.dcVZm8fSnbyOaLW4lcJmkz,
          };
        });
        setItems(data);
        setFilteredItems(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllNotes();
  }, []);

  const onItemClick = (id) => {
    const clickedItem = filteredItems.find((item) => item.id === id);
    setSelectedItem(clickedItem === selectedItem ? null : clickedItem);
    return filteredItems.map((item) => ({ ...item }));
  };

  const addItem = () => {
    async function postItem() {
      try {
        const result = await addNote();
        const data = {
          id: result.id,
          text: "",
          time: result.values.dcVZm8fSnbyOaLW4lcJmkz,
        };
        setFilteredItems([...filteredItems, data]);
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
        setFilteredItems(
          filteredItems.map((item) => item).filter((item) => item.id !== id)
        );
        setSelectedItem(null);
      } catch (error) {
        console.log(error);
      }
    }
    deleteItem();
  };

  const updateItem = (id) => {
    async function updateItem() {
      try {
        const data = await UpdateNote(id);
        const updatedData = filteredItems.map((item) => {
          if (item.id === id) {
            return {
              id: item.id,
              text: data.values.chWRxcN8jlW6FcMcZcMviZ,
              time: data.values.dcVZm8fSnbyOaLW4lcJmkz,
            };
          } else {
            return item;
          }
        });
        setFilteredItems(updatedData);
      } catch (error) {
        console.log(error);
      }
    }
    updateItem();
  };

  const filterItems = (value) => {
    const filteredItems = items.filter((item) =>
      item.text?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };

  return (
    <>
      <SeachBox
        addItem={addItem}
        deleteItem={deleteItem}
        updateItem={updateItem}
        filterItems={filterItems}
        selectedItem={selectedItem}
      />
      <main className={css.container}>
        <div className={css.wrap}>
          <SideBar
            onItemClick={onItemClick}
            items={filteredItems}
            selectedItem={selectedItem}
          />
          <WorkSpace selectedItem={selectedItem} />
        </div>
      </main>
    </>
  );
}

export default App;
