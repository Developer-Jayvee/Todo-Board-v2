
export type InputTypes = "text" | "email" | "password" | "number" | "search" | "tel" | "url";

export interface InputColEvents { 
    onChange ?: (e : React.ChangeEvent<HTMLInputElement>) => void;
}
export interface InputColProps extends InputColEvents {
    labelName : string;
    placeHolder ?: string;
    inputType : InputTypes;
    customClassName ?: string;
    inputName ?: string;
    inputValue ?: string;
    isRequired ?: boolean;
    hasError ?: boolean;
    errorOutput ?: string;
    
}

export interface SearchInputTypes {
    customClass ?: string;
}