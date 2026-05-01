import type { InputColProps } from "@/components/Input/types";



export default function InputCol({ labelName, placeHolder, inputType , customClassName = "", inputName = "" } : InputColProps) {

    return <div className={`${customClassName}`}>
        <label className="block text-sm font-medium text-gray-700 mb-1">{labelName}</label>
        <input
            name={inputName}
            type={inputType}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder={placeHolder}
        />
    </div>
}