import { useState, type FormEvent } from "react";
import { loginApi } from "../server/auth.server";
import { emailValidator } from "@/util/validations.util";
import alert from "@/util/alert.util";
import useInputHandler from "@/shareble/hooks/useInputHandler";
import type { LoginFormData } from "../types";
import { useNavigate } from "react-router-dom";
import { ucword } from "@/util/util";

export default function useLoginHook<R>() {
  const { formDataState, setFormDataState, handleInputChange, resetFields } =
    useInputHandler<LoginFormData>({
      formData: { email: "", password: "" },
    });
  const [onLoading, setOnLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<R>({} as R);

  const navigate = useNavigate();
  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    if (!emailValidator(email)) {
      setError("Invalid email format");
      return;
    }

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setOnLoading(true);
    setError(null);
    alert.loading("Signing in...");

    try {
      const response = await loginApi({ email, password });
      const data = (await response.data) as R;

      if (!data) {
        setError("Login failed. Please try again.");
        setOnLoading(false);
        return;
      }
      
      alert.success("Login successful!");
      setResponseData(data);
      setError(null);
      setOnLoading(false);
      resetFields();
      navigate(`/${ucword(data?.user?.first_name)}`)
    } catch (error) {
      setError(`${error}`);
      setOnLoading(false);
      alert.close();
    }
  };
  return {
    onSubmitForm,
    onLoading,
    error,
    responseData,
    formDataState,
    setFormDataState,
    handleInputChange,
  };
}
