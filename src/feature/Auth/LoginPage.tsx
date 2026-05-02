import InputCol from "@/components/Input/InputCol";
import AuthTemplate from "./AuthTemplate";
import useLoginHook from "./hooks/useLoginHook";
import type { LoginResponseData } from "./types";

export default function LoginPage() {
  const { onSubmitForm, onLoading, error, handleInputChange, formDataState } =
    useLoginHook< LoginResponseData>();

  return (
    <AuthTemplate headerText="Sign In" onSubmit={onSubmitForm}>
      <InputCol
        onChange={handleInputChange}
        inputValue={formDataState.email}
        labelName="Email"
        inputName="email"
        inputType="email"
        placeHolder="your@email.com"
      />

      <InputCol
        onChange={handleInputChange}
        inputValue={formDataState.password}
        labelName="Password"
        inputName="password"
        inputType="password"
        placeHolder="••••••••"
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
          Forgot password?
        </a>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {onLoading && <p className="text-blue-500 text-sm">Signing in...</p>}
    </AuthTemplate>
  );
}
