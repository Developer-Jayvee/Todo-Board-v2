import axiosInstance from "@/config/axios.config";
import type { LoginFormData, RegisterFormData } from "@features/Auth/types";

export const resetLocalStorage = () => {
  localStorage.removeItem("ACCESS_TOKEN");
  localStorage.removeItem("REFRESH_TOKEN");
  localStorage.removeItem("USER");
};
export const loginApi = async ({ email, password }: LoginFormData) => {
  const response = await axiosInstance.post("/auth/login", { email, password });
  resetLocalStorage();
  
  if (response.status === 200) {
    const res = await response.data;
    localStorage.setItem("ACCESS_TOKEN", res.data.access);
    localStorage.setItem("REFRESH_TOKEN", res.data.refresh);
    localStorage.setItem("USER", JSON.stringify(res?.data?.user));
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
