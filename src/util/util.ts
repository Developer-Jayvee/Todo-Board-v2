import { TOKEN_NAME, USER_INFO_NAME } from "@/constant/const";
import type { UserInfoData } from "@/feature/Auth/types";

export const getRawUserInfo = () : UserInfoData | null => {
    const token = localStorage.getItem(TOKEN_NAME);
    if(!token) return null;

    const userInfo = localStorage.getItem(USER_INFO_NAME);
    if(!userInfo) return null;
    
    return JSON.parse(userInfo);
}

export const ucword = (word : string) => {
    return word.charAt(0).toLocaleUpperCase() + '' + word.slice(1);
}