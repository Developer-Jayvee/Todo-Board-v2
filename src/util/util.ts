import type { UserInfoData } from "@/feature/Auth/types";

export const getRawUserInfo = () : UserInfoData | null => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if(!token) return null;

    const userInfo = localStorage.getItem("USER");
    if(!userInfo) return null;
    
    return JSON.parse(userInfo);
}