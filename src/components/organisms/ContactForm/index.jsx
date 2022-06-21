import newsletter from '../../../assets/svg/newsletter.svg'
import ContactFormWrapper from './styles'


export default function ContactForm() {
  return (
    <ContactFormWrapper>
      <form>
        <div className="logo">
          <img src={newsletter} alt="ícone de uma carta na cor branca" />
        </div>
        <div className="heading">
          <h2>Receba nossas novidades, descontos e muito mais</h2>
        </div>
        <div className="controlInputs">
          <input
            type="text"
            className='InputName'
            placeholder='Digite seu nome'
          />
          <input
            type="text"
            className='InputEmail'
            placeholder='Digite seu Email'
          />
        </div>
        <button >Eu quero receber novidades!</button>
      </form>
    </ContactFormWrapper>
  )
}
