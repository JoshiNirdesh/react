import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import image1 from '../assets/nepal1.jpg'
import image2 from '../assets/nepal2.jpg'
import image3 from '../assets/nepal3.jpg'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src={image1} alt="" /></div>
        <div className="embla__slide"><img src={image2} alt="" /></div>
        <div className="embla__slide"><img src={image3} alt="" /></div>
      </div>
    </div>
  )
}


