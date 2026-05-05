import axiosInstance from "@/config/axios.config";
import { REFRESH_TOKEN_NAME, TOKEN_NAME, USER_INFO_NAME } from "@/constant/const";
import type { LoginFormData, RegisterFormData } from "@features/Auth/types";

export const resetLocalStorage = () => {
  localStorage.removeItem(TOKEN_NAME);
  localStorage.removeItem(REFRESH_TOKEN_NAME);
  localStorage.removeItem(USER_INFO_NAME);
};
export const loginApi = async ({ email, password }: LoginFormData) => {
  const response = await axiosInstance.post("/auth/login", { email, password });
  resetLocalStorage();
  
  if (response.status === 200) {
    const res = await response.data;
    localStorage.setItem(TOKEN_NAME, res.data.access);
    localStorage.setItem(REFRESH_TOKEN_NAME, res.data.refresh);
    localStorage.setItem(USER_INFO_NAME, JSON.stringify(res?.data?.user));
  }
  return response.data;
};

export const registerApi = async({ first_name , last_name ,email ,password} : RegisterFormData) => {
  const response = await axiosInstance.post("auth/register",({
    first_name,
    last_name,
    email,
    password
  }));
  return await response.data;
}
