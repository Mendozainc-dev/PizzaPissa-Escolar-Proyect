//Button component
//this props are for the button component
//contains type, id, className and text
interface Button {
    type: "submit" | "reset" | "button" | undefined;
    id: string | undefined;
    className?: string;
    text: string;
    onClick?: () => void
}

function Button({type, id, className, text, onClick}: Button) {
  return (
    <div>
        <button type={type} id={id} className={className} onClick={onClick} >{text}</button>
    </div>
  )
}

export default Button
