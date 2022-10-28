import { homepage } from "./../api/homepage";
import axios from "axios";

export const getData = async (setter: (e: any) => void) => {
  try {
    const baseUrl =
      "https://media-content.ccbp.in/website/react-assignment/resources.json";

    let response = await axios.get(baseUrl);
    console.log(response);
    setter(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
