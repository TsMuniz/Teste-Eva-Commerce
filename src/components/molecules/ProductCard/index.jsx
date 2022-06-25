import { useState } from 'react'
import Rating from '../Rating'
import ProductCardWrapper from './styles'

export default function ProductCard(
  {
    image,
    description,
    oldPrice,
    rating,
    currentPrice,
    discount
  }) {
  const [showButton, setShowButton] = useState(false)

  const getPriceWithDiscount = (price, discountRate) => {
    const discountValue = price * (discountRate / 100)
    return price - discountValue
  }

  return (
    <ProductCardWrapper
      onMouseOver={() => setShowButton(true)}
      onMouseOut={() => setShowButton(false)}
    >
      <div className='product_image_container'>
        <img src={image} alt="imagem do produto" />
      </div>

      <div className='product_details_container'>
        <h5>{description}</h5>

        <Rating rating={rating} />

        <div className="product_price_container">
          <p>{oldPrice ? oldPrice.toFixed(2) : null}</p>
          <h2>{`R$ ${Number(currentPrice).toFixed(2)}`}</h2>
        </div>

        <span>
          {`Ou R$ ${getPriceWithDiscount(currentPrice, discount)
            .toFixed(2)} com ${discount}% off no boleto`}
        </span>
      </div>
      {showButton && (
        <div className='product_button_container'>
          <button>
            Comprar
          </button>
        </div>
      )}
      <div className='product_button_container_tablet_and_mobile_resolution'>
        <button>
          Comprar
        </button>
      </div>
    </ProductCardWrapper>
  )

}
