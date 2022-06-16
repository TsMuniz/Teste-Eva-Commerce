import Logo from '../../atoms/logo'
import CategoryList from '../../molecules/CategoryList'
import SearchBar from '../../molecules/SearchBar'
import HeaderWrapper from './styles'

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <CategoryList />
      <SearchBar/>
   </HeaderWrapper>
  )
}
