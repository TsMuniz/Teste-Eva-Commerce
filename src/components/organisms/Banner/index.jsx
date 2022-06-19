import { useEffect, useRef } from 'react'
import banner from '../../../assets/images/banner.jpeg'
import BannerImage from '../../atoms/BannerImage'
import BannerBullets from '../../molecules/BannerBullets'
import BannerWrapper from './styles'


export default function Banner() {
  const BannerRef = useRef(null)
  
  const SwipeBannerLeft = () => {
    BannerRef.current.scrollLeft += BannerRef.current.offsetWidth
  }

  const SwipeBannerToStart = () => {
    BannerRef.current.scrollLeft -= BannerRef.current.offsetWidth * 3
  }

  useEffect(() => {
    
    let scrollCounter = 0

    const intervalID = setInterval(() => {      
      if (scrollCounter < 3) {
        scrollCounter += 1        
        return SwipeBannerLeft()
      }      
      scrollCounter = 0
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
      <BannerBullets/>    
    </BannerWrapper>
   
  )
}
