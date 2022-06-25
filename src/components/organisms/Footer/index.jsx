import FooterWrapper from './styles'

export default function Footer() {
  return (
    <FooterWrapper>
      <h2>Eva Shop</h2>
      <div className='about'>
        <p href="#">Quem somos</p>
        <p href="#">Política e privacidade</p>
        <p href="#">FeedbAck de clientes</p>
        <p href="#">Trocas e devoluções</p>
      </div>

      <div className='adress'>
        <p>Rua Av. Rio Negro, 1100</p>
        <p>Jardim Roselândia</p>
        <p>14406-005</p>
        <p>Franca-SP</p>
      </div>

      <div className='contact'>
        <p>(16)9 98179-7325</p>
        <p>Contato@evacommerce.com.br</p>
      </div>
    </FooterWrapper>
  )
}
