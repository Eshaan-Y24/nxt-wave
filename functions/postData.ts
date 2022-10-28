import axios from "axios";
export const postData = async (data: any) => {
  try {
    const baseUrl =
      "https://media-content.ccbp.in/website/react-assignment/add_resource.json";
    let response = await axios.post(baseUrl, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
