interface Button {
    type: "submit" | "reset" | "button" | undefined;
    id: string | undefined;
    className?: string;
    text: string;
}

function Button({type, id, className, text}: Button) {
  return (
    <div>
        <button type={type} id={id} className={className}  >{text}</button>
    </div>
  )
}

export default Button