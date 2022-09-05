import axios from "axios";

const urlInternal = process.env.REACT_APP_API;

export const apiRequest = async (
  method: string,
  url: string,
  data = {},
  headers = {}
) => {
  try {
    const response = await axios({
      method: method,
      url: `${urlInternal}${url}`,
      data: data,
      headers: headers,
    });

    return response?.data;
  } catch (error) {
    return error;
  }
};
