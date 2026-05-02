import useInputHandler from "@/shareble/hooks/useInputHandler";
import type { RegisterFormData } from "../types";
import { useState, type FormEvent } from "react";
import { registerApi } from "../server/auth.server";
import alert from "@/util/alert.util";
import { useNavigate } from "react-router-dom";


export default function useRegisterHook(){
    const { formDataState, setFormDataState, handleInputChange, resetFields } =
    useInputHandler<RegisterFormData>({
      formData: { first_name : "" , last_name : "" , email : "" , password : ""},
    });
    const [onLoading, setOnLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const handleRegistration = async (e : FormEvent<HTMLFormElement>) => {
       e.preventDefault();
         
        alert.loading("Registering new user....");
        setOnLoading(true);
        setError(null);
        try {
            
            const response = await registerApi({...formDataState});
            if(!response){
                setOnLoading(false)
                throw new Error("Register Failed. Please try again later.");
            }
            alert.success("Successfully registered.")
            .then( (result) => {
                if(result.isConfirmed){
                    resetFields()
                    navigate("/");
                }
            })
            .finally( () => {
                setOnLoading(false)
            })
        } catch (error) {
            if(error instanceof Error) setError(error.message)
            alert.close()
        }
        
    }

    return {
        formDataState,
        setFormDataState,
        handleInputChange,
        resetFields,
        handleRegistration,
        onLoading,
        error
    }
}