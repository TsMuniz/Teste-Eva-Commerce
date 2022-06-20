import { useEffect, useState } from 'react'
import { getAllProducts, URL } from '../../../services/Api'
import HighLightsSectionHeading from '../../atoms/HighLightsSectionHeading'
import ProductCard from '../../molecules/ProductCard/index'
import SwiperHighlights from '../../molecules/SwiperHighlights'
import HighLightsSectionWrapper from './styles'

export default function HighLightsSection() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts(URL).then(( {data} )=> setProducts(data))
  }, [])

  if (!products) { return null }
  
  return (
    <HighLightsSectionWrapper>
      <HighLightsSectionHeading text="Destaques" />
      
      <SwiperHighlights>
        {
          products.map((product) => {
            return (
              <ProductCard
                image={product?.images_product[0]?.path}
                description={product.name}
                oldPrice={
                  product.promotional_price === null
                    ? ''
                    : product.price
                }
                rating={product.stars}
                currentPrice={
                  product.promotional_price === null
                  ? product.price
                  : product.promotional_price}
                discount              
              />
            )
          })
        }
      </SwiperHighlights>
    </HighLightsSectionWrapper>
  )
}
