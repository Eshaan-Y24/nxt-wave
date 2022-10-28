import { homepage } from "./../api/homepage";
import axios from "axios";

export const getData = async () => {
  try {
    const baseUrl =
      "https://media-content.ccbp.in/website/react-assignment/resources.json";

    let response: homepage = await axios.get(baseUrl);
    return response;
  } catch (error) {
    console.log(error);
  }
};
