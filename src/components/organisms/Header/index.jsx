import Logo from '../../atoms/logo'
import Cart from '../../molecules/Cart'
import CategoryList from '../../molecules/CategoryList'
import MyAcount from '../../molecules/MyAcount'
import SearchBar from '../../molecules/SearchBar'
import HeaderWrapper from './styles'

const bb = ['bebeza', 'ibiza' , 'peloponezo','payday']

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <CategoryList categories={bb} />
      <SearchBar />
      <MyAcount />
      <Cart quantity="0"/>
   </HeaderWrapper>
  )
}
