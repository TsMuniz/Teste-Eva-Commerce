import { useEffect, useRef, useState } from 'react'
import setaCategoria from '../../../assets/svg/setaCategorias.svg'
import { getAllProducts, URL } from '../../../services/Api'
import ProductCard from '../ProductCard'
import SwiperHighlightsWrapper from './styles'


export default function SwiperHighlights() {
  const swiper = useRef(null)
   const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts(URL).then(response => setProducts(response.data))
  }, [])

  if (products === null) return null

  return (
    <SwiperHighlightsWrapper >
      <img src={setaCategoria} alt="Icone de uma seta" />
      <div ref={swiper} className="swiper">
        {products.map((product) => {
          return (
            <ProductCard
              image={product?.images_product[0]?.path}
              description={product.name}
              oldPrice={product.promotional_price}
              rating={product.stars}
              currentPrice={product.price}
            />
          )})
        }
      </div>
      <img src={setaCategoria} alt="Icone de uma seta" />
    </SwiperHighlightsWrapper>
  )
}
