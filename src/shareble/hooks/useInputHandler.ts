import { useRef, useState } from "react";


interface InputHandlerProps<T>{
    formData : T;
}
export default function useInputHandler<T>( { formData } : InputHandlerProps<T>) {
    const [ formDataState , setFormDataState] = useState<T>(formData);
    const inititalState = useRef(formData);
    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.target;
        setFormDataState((prevData) => ({ ...prevData, [name]: value }));
    }
    const resetFields = () =>{
         setFormDataState(inititalState.current);
    }
    return {  formDataState , setFormDataState, handleInputChange , resetFields };
    
}