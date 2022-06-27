/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'
import escritorio_banner from '../../../assets/images/escritorio_banner.avif'
import games_banner from '../../../assets/images/games_banner.avif'
import livros_banner from '../../../assets/images/livros_banner.avif'
import roupas_banner from '../../../assets/images/roupas_banner.avif'
import BannerImage from '../../atoms/BannerImage'
import BannerBullets from '../../molecules/BannerBullets'
import BannerWrapper from './styles'


export default function Banner() {
  const BannerRef = useRef(null)
  const screenWidth = window.innerWidth
  const scrollBarWidth = screenWidth >= 1024 ? 10 : 0

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
        <BannerImage
          image={livros_banner}
          title="Seus Livros favoritos"
          subTitle="você encontra aqui!"
        />
        <BannerImage
          image={escritorio_banner}
          title="Tudo para o seu escritório"
          subTitle="está te esperando!"
        />
        <BannerImage
          image={roupas_banner}
          title="O melhor da moda"
          subTitle="a um click de distância!"
        />
        <BannerImage
          image={games_banner}
          title="Os melhores games"
          subTitle="na palma da sua mão!"
        />
      </div>
      <BannerBullets scrollPosition={scrollPosition} />
    </BannerWrapper>

  )
}
