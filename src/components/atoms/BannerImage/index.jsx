import ImageWrapper from './styles'

export default function BannerImage({ image, title, subTitle }) {
  return (
    <ImageWrapper>
      <div>
        <img src={image} alt="asdasd" />
      </div>

      <div className='title_wrapper'>
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </div>
    </ImageWrapper>
  )
}
