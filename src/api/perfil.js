import axios from "axios";
import { useMaps } from "../context/MapContext";
import { create_profile } from "../env/env";

export const create_profile_req = async (prof_data) => {
  const { token } = useMaps();

  // const config = {
  //   headers: { token: `Bearer ${token}` },
  // };
  console.log(token);

  const response = await axios.post(create_profile, prof_data);
  return console.log(response);
};
