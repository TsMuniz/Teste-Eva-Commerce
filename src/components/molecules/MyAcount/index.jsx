import usuario from '../../../assets/svg/usuario.svg'
import MyAcountWrapper from './styles'

export default function MyAcount() {
  return (
    <MyAcountWrapper>
      Minha conta
      <img src={usuario} alt="ícone da silhueta de um ser humano que representa um usuário" />
    </MyAcountWrapper>
  )
}
