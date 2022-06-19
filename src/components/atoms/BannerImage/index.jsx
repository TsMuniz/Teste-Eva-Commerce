import ImageWrapper from './styles'

export default function BannerImage({image}) {
  return <ImageWrapper>
    <div>
      <img src={image} alt="asdasd" />
    </div>
  </ImageWrapper>
}
