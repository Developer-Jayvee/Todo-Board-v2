import InputCol from "@/components/Input/InputCol";
import AuthTemplate from "./AuthTemplate";

export default function LoginPage() {
  return <AuthTemplate headerText="Sign In">
        <InputCol labelName="Email" inputName="email" inputType="email" placeHolder="your@email.com"/>
        <InputCol labelName="Password" inputName="password" inputType="password" placeHolder="••••••••"/>
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
        </div>
  </AuthTemplate>

}
