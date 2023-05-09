import axios from "axios";

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
          dcVZm8fSnbyOaLW4lcJmkz: new Date().toLocaleString(),
        },
      }
    );
    return response.data.record;
  } catch (error) {
    console.log(error);
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
  }
};

export const UpdateNote = async (id) => {
  try {
    const response = await axios.put(
      `${APP_ID}/dtypes/${id}.json?rest_api_key=${KEY}`,
      {
        values: {
          chWRxcN8jlW6FcMcZcMviZ: "update",
          dcVZm8fSnbyOaLW4lcJmkz: new Date().toLocaleString(),
        },
      }
    );
    console.log(response.data.record);
    return response.data.record;
  } catch (error) {
    console.log(error);
  }
};
