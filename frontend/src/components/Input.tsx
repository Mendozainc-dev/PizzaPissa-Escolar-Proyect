import React from 'react'

//Input component
//this props are for the input component
//contains type, id, className, placeholder, onClick and name
interface Input {
    type: "number" | "search" | "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "password" | "radio" | "range" | "reset" | "submit" | "tel" | "text" | "time" | "url" | "week";
    id: string;
    className?: string;
    placeholder?: string;
    onClick?: React.MouseEventHandler<HTMLInputElement> | undefined
    name: string;
}

function Input({type, id, className, placeholder, onClick, name}: Input) {
  return (
    <div>
        <input type={type} id={id} name={name} className={className} placeholder={placeholder} onClick={onClick} required />
    </div>
  )
}

export default Input