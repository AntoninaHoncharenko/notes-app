import { useState, useEffect, createContext } from "react";
import { Toaster } from "react-hot-toast";
import css from "./App.module.css";
import { SeachBox } from "../SearchBox/SearchBox";
import { SideBar } from "../Sidebar/Sidebar";
import { WorkSpace } from "../Workspace/Workspace";
import { Loader } from "../Loader/Loader";
import { getNotes, addNote, deleteNote, updateNote } from "../../api";

export const AppContext = createContext();

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState(selectedItem?.text);
  const [isLoading, setIsloading] = useState(false);

  const updateEditedText = (value) => {
    setEditedText(value);
  };

  useEffect(() => {
    async function getAllNotes() {
      try {
        setIsloading(true);
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

        const sortedData = data.sort(
          (a, b) => new Date(b.time) - new Date(a.time)
        );

        setItems(sortedData);
        setFilteredItems(sortedData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    }
    getAllNotes();
  }, []);

  const onItemClick = (id) => {
    const clickedItem = filteredItems.find((item) => item.id === id);
    setSelectedItem(clickedItem === selectedItem ? null : clickedItem);
    if (editedText) {
      setEditedText("");
    }
    return filteredItems.map((item) => ({ ...item }));
  };

  const addItem = () => {
    async function postItem() {
      try {
        setIsloading(true);
        const result = await addNote();
        const data = {
          id: result.id,
          text: "",
          time: result.values.dcVZm8fSnbyOaLW4lcJmkz,
        };
        setFilteredItems([data, ...filteredItems]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    }
    postItem();
  };

  const deleteItem = (id) => {
    async function deleteItem() {
      try {
        setIsloading(true);
        await deleteNote(id);
        setFilteredItems(
          filteredItems.map((item) => item).filter((item) => item.id !== id)
        );
        setSelectedItem(null);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    }
    deleteItem();
  };

  const updateItem = (id, value) => {
    async function updateItem() {
      try {
        setIsloading(true);
        const data = await updateNote(id, value);
        const updatedData = filteredItems
          .map((item) => {
            if (item.id === id) {
              return {
                id: item.id,
                text: data.values.chWRxcN8jlW6FcMcZcMviZ,
                time: data.values.dcVZm8fSnbyOaLW4lcJmkz,
              };
            } else {
              return item;
            }
          })
          .sort((a, b) => new Date(b.time) - new Date(a.time));
        setFilteredItems(updatedData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
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

  const isEditChange = () => {
    setIsEdit(!isEdit);
  };

  return (
    <AppContext.Provider
      value={{
        onItemClick,
        addItem,
        deleteItem,
        updateItem,
        filterItems,
        isEditChange,
        selectedItem,
        filteredItems,
        items,
        isEdit,
        editedText,
        updateEditedText,
      }}
    >
      <>
        <SeachBox />
        <main className={css.container}>
          <div className={css.wrap}>
            <SideBar />
            <WorkSpace />
          </div>
        </main>
      </>
      {isLoading && <Loader />}

      <Toaster />
    </AppContext.Provider>
  );
}

export default App;
