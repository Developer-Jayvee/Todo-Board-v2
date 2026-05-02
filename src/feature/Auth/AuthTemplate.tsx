import type { AuthTemplateProps } from "@/feature/Auth/types";
import { ArrowLeft } from "iconoir-react";

export default function AuthTemplate({
  children,
  headerText,
  submitText = "Sign In",
  onBack,
  onSubmit ,
  showReturnButton = false,
  isSubmitDisabled = false
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

          <button disabled={isSubmitDisabled} className={`${isSubmitDisabled ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 cursor-pointer hover:bg-indigo-700'} w-full   text-white font-medium py-2.5 rounded-lg transition-colors`}>
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
}
