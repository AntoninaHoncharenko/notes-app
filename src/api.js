import axios from "axios";

axios.defaults.baseURL = "https://quintadb.com.ua/apps/";

const KEY = "ddJmkcgMnlWOz_W5elW5DR";
const APP_ID = "cGdh5rW6vduleXW5_dOCo0";
const ENTITY_ID = "ddSSoTgNPhv50WAu0FW5nf";

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
          cVDmkBbdTktyoPl8kKnu9U: "",
          ddI1PAwujbW4FdNSkSW4rl: new Date(),
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
    const response = axios.delete(
      `${APP_ID}/dtypes/${id}.json?rest_api_key=${KEY}`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
