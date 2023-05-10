import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://quintadb.com.ua/apps/";

const KEY = "bfcSoFlCnmA6NcICoRmmoa";
const APP_ID = "clyMPbsIzcMikRW7T8W4vc";
const ENTITY_ID = "ayWPZcVSjjb6JcVefODtWe";

export const getNotes = async () => {
  try {
    const responce = await axios.get(
      `${APP_ID}/dtypes/entity/${ENTITY_ID}.json?rest_api_key=${KEY}`
    );
    return responce.data.records;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong... Please, try again");
  }
};

export const addNote = async () => {
  try {
    const response = await axios.post(
      `${APP_ID}/dtypes.json?rest_api_key=${KEY}`,
      {
        values: {
          entity_id: `${ENTITY_ID}`,
          chWRxcN8jlW6FcMcZcMviZ: "",
          dcVZm8fSnbyOaLW4lcJmkz: new Date().toString(),
        },
      }
    );
    return response.data.record;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong... Please, try again");
  }
};

export const deleteNote = async (id) => {
  try {
    const response = await axios.delete(
      `${APP_ID}/dtypes/${id}.json?rest_api_key=${KEY}`
    );
    return response;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong... Please, try again");
  }
};

export const updateNote = async (id, value) => {
  try {
    const response = await axios.put(
      `${APP_ID}/dtypes/${id}.json?rest_api_key=${KEY}`,
      {
        values: {
          chWRxcN8jlW6FcMcZcMviZ: value,
          dcVZm8fSnbyOaLW4lcJmkz: new Date().toString(),
        },
      }
    );
    return response.data.record;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong... Please, try again");
  }
};
