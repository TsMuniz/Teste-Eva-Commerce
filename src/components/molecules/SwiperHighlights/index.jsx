import { useRef } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import SwiperHighlightsWrapper from './styles'


export default function SwiperHighlights({ children }) {
  const swiper = useRef(null)

  const SwipeToLeft = () => {
    swiper.current.scrollLeft += swiper.current.offsetWidth
  }

  const SwipeToRight = () => {
    swiper.current.scrollLeft -= swiper.current.offsetWidth

  }

  return (
    <SwiperHighlightsWrapper >
      <IoIosArrowBack
        className='arrow_left'
        onClick={SwipeToRight}
      />

      <div ref={swiper} className="swiper">
        {children}
      </div>

      <IoIosArrowBack
        className='arrow_right'
        onClick={SwipeToLeft}
      />
    </SwiperHighlightsWrapper>
  )
}
