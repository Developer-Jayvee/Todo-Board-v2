import type { AuthTemplateProps } from "@/feature/Auth/types";
import { ArrowLeft } from "iconoir-react";

export default function AuthTemplate({
  children,
  headerText,
  submitText = "Sign In",
  onBack,
  onSubmit ,
  showReturnButton = false,
}: AuthTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-400 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        {
          showReturnButton && (
            <ArrowLeft className="cursor-pointer" onClick={() => onBack?.()} />
        )}
        
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {headerText}
        </h2>

        <form className="space-y-4" onSubmit={onSubmit}>
          {children}

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
}
