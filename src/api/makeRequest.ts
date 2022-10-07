import axios from "axios";
const urlInternal = process.env.REACT_APP_API;
export const makeRequest = async (
  method: string,
  url: string,
  data: { [key: string]: any } | undefined
) => {
  const request = await axios({
    method: method,
    url: `${urlInternal}${url}`,
    data: data,
  });
  return request;
};
