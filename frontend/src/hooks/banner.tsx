import { useEffect, useState } from 'react'

// Lista de imágenes del banner
const bannerImages = [
  '/assets/banner1.jpg',
  '/assets/banner2.jpg',
  '/assets/banner3.jpg'
]

export function bannerpizzas(interval: number = 30000) {
  const [currentImage, setCurrentImage] = useState(bannerImages[0])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (index + 1) % bannerImages.length
      setIndex(nextIndex)
      setCurrentImage(bannerImages[nextIndex])
    }, interval)

    return () => clearInterval(timer)
  }, [index, interval])

  return currentImage
}
