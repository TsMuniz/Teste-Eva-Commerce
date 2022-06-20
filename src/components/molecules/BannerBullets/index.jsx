import bullet from '../../../assets/svg/bullet.svg'
import bulletPink from '../../../assets/svg/bulletPink.svg'
import BulletsWrapper from './styles'

export default function BannerBullets({ scrollPosition }) {
  
  return (
    <BulletsWrapper scrollPosition={scrollPosition}>
      <img src={ scrollPosition === 0 ? bulletPink : bullet } alt="asdasdasd" />
      <img src={ scrollPosition === 1 ? bulletPink : bullet } alt="asdasdasd" />
      <img src={ scrollPosition === 2 ? bulletPink : bullet } alt="asdasdasd" />
      <img src={ scrollPosition === 3 ? bulletPink : bullet } alt="asdasdasd" />
    </BulletsWrapper>
  )
}
