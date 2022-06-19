import escritorio from '../../../assets/images/escritorio.png'
import livros from '../../../assets/images/livros.png'
import vestuario from '../../../assets/images/vestuario.png'
import CategoriesSectionItem from '../../atoms/CategoriesSectionItem/Index'
import CategorySectionWrapper from './styles'

export default function CategoriesSection() {
  return (
    <CategorySectionWrapper>
      <CategoriesSectionItem
        image={livros}
        alt="imagem de uma estante com muitos livros"
        name="Livros"
      />
      <CategoriesSectionItem
        image={escritorio}
        alt="imagem das mãos de um homem em uma
         escrivaninha segurando um celular com um 
         noteBook sobre a escrivanhnha"
        name="Escritorio"
      />
      <CategoriesSectionItem
        image={vestuario}
        alt="imagem de várias peças de roupas penduradas em cabides"
        name="Vestuário"
      />
    </CategorySectionWrapper>
  )
}
