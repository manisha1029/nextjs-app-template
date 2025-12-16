'use client'

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import clsx from "clsx";

interface ClassNamesProps {
    wrapper?: string;
    label?: string;
    input?: string;
}

interface TextInputProps {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    classNames?: ClassNamesProps;
}

function TextInput({
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
    classNames = {},
}: TextInputProps) {
    // Destructuring.
    const { wrapper: wrapperClass, label: labelClass, input: inputClass } = classNames;

    // States.
    const [showPass, setShowPass] = useState(false)
    return (
        <div className={`space-y-1 ${wrapperClass}`}>
            <label className={clsx('text-sm font-medium text-gray-700', labelClass)}>{label}</label>
            <div className="relative">
                <input
                    type={showPass ? 'text' : type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={clsx('w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500', inputClass)}
                />
                {type === 'password' && <div className='absolute right-4 top-2'  onClick={() => setShowPass(!showPass)}> {showPass ? <Eye /> : <EyeOff />}</div>}
            </div>

        </div>)
}

export default TextInput;