import logo from '../../../assets/images/logo.png'
import LogoWrapper from './styles'

export default function Logo() {
  return (
    <LogoWrapper>
      <img src={logo} alt="logotipo da agencia eva commerce" />
    </LogoWrapper>
  )
}
