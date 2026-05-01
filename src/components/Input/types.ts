
export type InputTypes = "text" | "email" | "password" | "number" | "search" | "tel" | "url";
export interface InputColProps {
    labelName : string;
    placeHolder ?: string;
    inputType : InputTypes;
    customClassName ?: string;
    inputName ?: string;
}