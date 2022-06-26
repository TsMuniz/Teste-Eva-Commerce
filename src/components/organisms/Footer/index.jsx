import email from '../../../assets/svg/email.svg'
import loja from '../../../assets/svg/loja.svg'
import mapa from '../../../assets/svg/mapa.svg'
import whatsapp from '../../../assets/svg/whatsapp.svg'
import FooterWrapper from './styles'

export default function Footer() {
  return (
    <FooterWrapper>
      <div className='footer_top'>
        <h2>Eva Shop</h2>
      </div>

      <div className='footer_bottom'>
        <div className='about'>
          <img src={loja} alt="icone de uma loja na cor rosa" />
          <p>Quem somos</p>
          <p>Política e privacidade</p>
          <p>FeedbAck de clientes</p>
          <p>Trocas e devoluções</p>
        </div>

        <div className='adress'>
          <img src={mapa} alt="icone de uma loja na cor rosa" />
          <p>Rua Av. Rio Negro, 1100</p>
          <p>Jardim Roselândia</p>
          <p>14406-005</p>
          <p>Franca-SP</p>
        </div>

        <div className='contact'>
          <img src={loja} alt="icone de uma loja na cor rosa" />
          <span>
            <img src={whatsapp} alt="icone do logotivo do whatsapp na cor branca" />
            (16) 9 98179-7325
          </span>
          <span>
            <img src={email} alt="icone de uma carta na cor branca" />
            Contato@evacommerce.com.br
          </span>
        </div>
      </div>

    </FooterWrapper>
  )
}
