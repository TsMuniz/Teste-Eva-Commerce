import CategorriesSectionItemWrapper from './styles'

export default function CategoriesSectionItem({image, alt, name}) {
  return (
    <CategorriesSectionItemWrapper categoryName={name}>
      <img src={image} alt={alt} />
      <h3>{name}</h3>
    </CategorriesSectionItemWrapper>
  )
}
