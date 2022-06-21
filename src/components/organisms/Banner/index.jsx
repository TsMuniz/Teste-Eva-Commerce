import { useEffect, useRef, useState } from 'react'
import banner from '../../../assets/images/banner.jpeg'
import BannerImage from '../../atoms/BannerImage'
import BannerBullets from '../../molecules/BannerBullets'
import BannerWrapper from './styles'


export default function Banner() {
  const BannerRef = useRef(null)
  const scrollBarWidth = 10
  let [scrollPosition, setScrollPosition] = useState(0)
  
  const SwipeBannerLeft = () => {
    BannerRef.current.scrollLeft += (BannerRef.current.offsetWidth + scrollBarWidth)
  }

  const SwipeBannerToStart = () => {
    BannerRef.current.scrollLeft -= (BannerRef.current.offsetWidth + scrollBarWidth) * 3
  }

  useEffect(() => {
    
    let scrollCounter = 0

    const intervalID = setInterval(() => {      
      if (scrollCounter < 3) {
        scrollCounter += 1        
        setScrollPosition(scrollCounter)
        return SwipeBannerLeft()
      }      
      scrollCounter = 0
      setScrollPosition(scrollCounter)
      SwipeBannerToStart()
    }, 4000)
    
    return () => clearInterval(intervalID)
  }, [])
  
  
  return (
    <BannerWrapper  >
      <div ref={BannerRef} >
        <BannerImage image={ banner } />            
        <BannerImage image={ banner }/>          
        <BannerImage image={ banner }/>            
        <BannerImage image={ banner }/>      
      </div>    
      <BannerBullets scrollPosition={scrollPosition}/>    
    </BannerWrapper>
   
  )
}
