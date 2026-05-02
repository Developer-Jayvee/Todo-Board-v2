import InputCol from "@/components/Input/InputCol";
import AuthTemplate from "@features/Auth/AuthTemplate";
import { useNavigate } from "react-router-dom";
import useRegisterHook from "./hooks/useRegisterHook";

export default function RegisterPage() {
  const { handleRegistration, formDataState, handleInputChange ,error ,onLoading } = useRegisterHook();
  const navigate = useNavigate();
  const navigateBack = () => navigate("/")
  return (
    <AuthTemplate onSubmit={handleRegistration} showReturnButton={true} onBack={() => navigateBack()} headerText="Sign Up" submitText="Create Account">
      <div className="flex space-x-4">
        <InputCol
          inputValue={formDataState.first_name}
          onChange={handleInputChange}
          inputName="first_name"
          labelName="First Name"
          placeHolder="Your first name"
          inputType="text"
          customClassName="w-1/2"
        />
        <InputCol
          inputValue={formDataState.last_name}
          onChange={handleInputChange}
          inputName="last_name"
          labelName="Last Name"
          placeHolder="Your last name"
          inputType="text"
          customClassName="w-1/2"
        />
      </div>
      <div className="mt-4">
        <InputCol
          inputValue={formDataState.email}
          onChange={handleInputChange}
          inputName="email"
          labelName="Email"
          placeHolder="Your email"
          inputType="email"
        />
      </div>
      <div className="mt-4">
        <InputCol
          inputValue={formDataState.password}
          onChange={handleInputChange}
          inputName="password"
          labelName="Password"
          placeHolder="Your password"
          inputType="password"
        />
      </div>
      <div className="mt-4">
        <InputCol
          onChange={handleInputChange}
          inputName="cpassword"
          labelName="Confirm Password"
          placeHolder="Confirm your password"
          inputType="password"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {onLoading && <p className="text-blue-500 text-sm">Please wait...</p>}
    </AuthTemplate>
  );
}
