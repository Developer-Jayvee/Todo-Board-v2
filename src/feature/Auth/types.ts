import type { FormEvent, ReactNode } from "react";

export interface AuthTemplatesActions {
    onBack ?: () => void;
    onSubmit : (e : FormEvent<HTMLFormElement>) => void;
    showReturnButton ?: boolean;
}
export interface AuthTemplateProps extends AuthTemplatesActions{
    children : ReactNode;
    headerText : string;
    submitText ?: string;
    isSubmitDisabled ?: boolean;
}

export interface LoginFormData {
    email : string;
    password : string;
}

export interface RegisterFormData {
    first_name : string;
    last_name : string;
    email : string;
    password : string;
    cpassword : string;
}
export interface UserInfoData {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    password : string;
}
export interface LoginResponseData {
    data : { 
        access : string;
        refresh : string;
        user : UserInfoData
    };
    message : string;
}