import HighLightsSectionHeading from '../../atoms/HighLightsSectionHeading'
import ProductCard from '../../molecules/ProductCard/index'
import SwiperHighlights from '../../molecules/SwiperHighlights'
import HighLightsSectionWrapper from './styles'

export default function HighLightsSection({ category, products }) {
  return (
    <HighLightsSectionWrapper>

      {category === 'all'
        ? <HighLightsSectionHeading text="Destaques" />
        : <HighLightsSectionHeading text={`Destaques em ${category}`} />
      }

      <SwiperHighlights>
        {
          products.map((product, index) => {
            return (
              <ProductCard
                key={`${product.name}${index}`}
                image={product?.images_product[0]?.path}
                description={product.name}
                oldPrice={
                  product.promotional_price === null
                    ? null
                    : Number(product.price)
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
