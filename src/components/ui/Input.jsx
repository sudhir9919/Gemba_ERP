import React from "react"
function TextInput({ type = "text", label, placeholder = "Enter your input here", value, onChangeHandler, className = "" }) {
    return (
        <label>
            <span className="text-gray-700">{label}</span>
            <input
                type={type}
                className={`mb-4 p-2 border border-gray-300 rounded shadow-2xl w-full" ${className}`}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </label>
    )
}
export default TextInput