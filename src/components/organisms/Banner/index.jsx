import { useEffect, useRef } from 'react'
import banner from '../../../assets/images/banner.avif'
import bullet from '../../../assets/svg/bullet.svg'
import BannerImage from '../../atoms/BannerImage'
import BannerWrapper from './styles'


export default function Banner() {
  const carousel = useRef(null)

  useEffect(() => {
    
    let scrollCounter = 0

    const intervalID = setInterval(() => {      
      if (scrollCounter < 3) {
        scrollCounter += 1        
        return carousel.current.scrollLeft += carousel.current.offsetWidth
      }      
      scrollCounter = 0
      carousel.current.scrollLeft -= carousel.current.offsetWidth * 3
    }, 4000)
    
    return () => clearInterval(intervalID)
  }, [])
  
  
  return (
    <BannerWrapper >
      <div className='carousel' ref={carousel}>
       
        <BannerImage  clasName="item" url='../../../assets/images/banner.png' />
        
        <div className='item'>
          <img src={ banner } alt="asdasdasd" />
        </div>
        <div className='item'>
          <img src={ banner } alt="asdasdasd" />
        </div>
        <div className='item'>
          <img src={ banner } alt="asdasdasd" />
        </div>
        <div className='scrollCircle'>
          <img src={ bullet } alt="asdasdasd" />
          <img src={ bullet } alt="asdasdasd" />
          <img src={ bullet } alt="asdasdasd" />
          <img src={ bullet } alt="asdasdasd" />
        </div>
      </div>
    </BannerWrapper>
   
  )
}
