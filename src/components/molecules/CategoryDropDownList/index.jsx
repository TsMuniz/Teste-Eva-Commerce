import { useState } from 'react'
import setaCategorias from '../../../assets/svg/setaCategorias.svg'
import CategoryDropDownListItem from '../../atoms/CategoryDropDownListItem'
import CategoryListWrapper from './styles'

export default function CategoryDropDownList({ categories }) {
  const [showCategoryList, setShowCategoryList] = useState(false)

  const listCategories = (categories) => {
    
    const categoriesList = categories.map((category, index) => (
      < CategoryDropDownListItem key={`${category}${index}`} category= { category } />)      
    )
      
    return categoriesList
  }

  return (
    <CategoryListWrapper>
      <div
        onClick={() => setShowCategoryList(!showCategoryList)}
      >
        Categorias
        <img
          src={setaCategorias}
          alt="icone de uma seta apontando para baixo"
        />
      </div>
      {showCategoryList &&
        (
          <ul>
            {listCategories(categories)}
          </ul>
        )
      }
      
    </CategoryListWrapper>
  )
}
