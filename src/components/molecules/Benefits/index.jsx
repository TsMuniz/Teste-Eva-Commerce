import cadeado from '../../../assets/svg/cadeado.svg'
import caminhao from '../../../assets/svg/caminhao.svg'
import cartao from '../../../assets/svg/cartao.svg'
import BenefitsWrapper from './styles'

export default function Benefits() {
  return (
    <BenefitsWrapper>
      <div>
        <img src={cadeado} alt="icone de um cadeado na cor rosa" />
        Site seguro
      </div>
      <div>
        <img src={cartao} alt="icone de um cartao na cor rosa" />
        Até 12x sem juros
      </div>
      <div>
        <img src={caminhao} alt="icone de um caminhao na cor rosa" />
        Entrega para todo o Brasil
      </div>
    </BenefitsWrapper>
    )
}
