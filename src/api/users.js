import axios from "axios";
import { get_users, login, create_user } from "../env/env";

export const getUsersRequest = async () => await axios.get(get_users);
export const loginUser = async (loginData) => {
  return await axios.post(login, loginData);
};

export const regUserRequest = async (regData) => {
  return await axios.post(create_user, regData);
}

