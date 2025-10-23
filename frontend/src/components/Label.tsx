//Label component
//this props are for the label component
//contains text and className
interface Label {
    text: string;
    className?: string | undefined;
}

function Label({text, className}: Label) {
  return (
    <div>
        <label className={className} >{text}</label>
    </div>
  )
}

export default Label