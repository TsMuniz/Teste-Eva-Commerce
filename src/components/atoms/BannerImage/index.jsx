import ImageWrapper from './styles'

export default function BannerImage({image}) {
  return <ImageWrapper>
    <div>
      <img src={image} alt="asdasd" />
    </div>
    <div className='title_wrapper'>
      <h1>Seus livros favoritos </h1>
      <h3>estão te esperando aqui!</h3>
    </div>
  </ImageWrapper>
}
