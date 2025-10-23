//Image component
//this props are for the image component
//contains src, alt and className
interface Images{
    src?: string;
    alt: string;
    className?: string;
}

function Images({src, alt, className}: Images) {
  return (
    <div>
      <img src={src} alt={alt} className={className} />
    </div>
  )
}

export default Images