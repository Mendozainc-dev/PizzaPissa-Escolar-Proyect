interface Images{
    src: string;
    alt: string;
}

function Images({src, alt}: Images) {
  return (
    <div>
        <template>
            <img src={src} alt={alt} />
        </template>
    </div>
  )
}

export default Images