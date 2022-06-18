import carrinho from '../../../assets/svg/carrinho.svg'
import CartWrapper from './styles'
export default function Cart({quantity}) {
  return (
    <CartWrapper>
      { `Carrinho(${quantity})` }
      <img src={carrinho} alt="ícone de um carrinho de compras" />
    </CartWrapper>
  )
}
