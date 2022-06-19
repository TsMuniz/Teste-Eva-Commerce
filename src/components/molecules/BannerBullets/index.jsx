import bullet from '../../../assets/svg/bullet.svg'
import BulletsWrapper from './styles'

export default function BannerBullets({scrollPosition}) {
  return (
    <BulletsWrapper scrollPosition={scrollPosition}>
      <img src={ bullet } alt="asdasdasd" />
      <img src={ bullet } alt="asdasdasd" />
      <img src={ bullet } alt="asdasdasd" />
      <img src={ bullet } alt="asdasdasd" />
    </BulletsWrapper>
  )
}
