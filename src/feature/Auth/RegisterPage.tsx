import InputCol from "@/components/Input/InputCol";
import AuthTemplate from "@features/Auth/AuthTemplate";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate();
    const navigateBack = () => {
         navigate("/")
    }
  return (
    <AuthTemplate showReturnButton={true} onBack={() => navigateBack()} headerText="Sign Up" submitText="Create Account">
      <div className="flex space-x-4">
        <InputCol
            inputName="first_name"
          labelName="First Name"
          placeHolder="Your first name"
          inputType="text"
          customClassName="w-1/2"
        />
        <InputCol
          inputName="last_name"
          labelName="Last Name"
          placeHolder="Your last name"
          inputType="text"
          customClassName="w-1/2"
        />
      </div>
      <div className="mt-4">
        <InputCol
            inputName="email"
          labelName="Email"
          placeHolder="Your email"
          inputType="email"
        />
      </div>
      <div className="mt-4">
        <InputCol
          inputName="password"
          labelName="Password"
          placeHolder="Your password"
          inputType="password"
        />
      </div>
        <div className="mt-4">
        <InputCol
          labelName="Confirm Password"
          placeHolder="Confirm your password"
          inputType="password"
        />
      </div>
    </AuthTemplate>
  );
}
