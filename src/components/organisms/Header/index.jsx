import { MdOutlineMenu } from 'react-icons/md'
import Logo from '../../atoms/logo'
import Cart from '../../molecules/Cart'
import CategoryDropDownList from '../../molecules/CategoryDropDownList'
import MyAcount from '../../molecules/MyAcount'
import SearchBar from '../../molecules/SearchBar'
import HeaderWrapper from './styles'

const bb = ['bebeza', 'ibiza' , 'peloponezo','payday']

export default function Header({categories}) {
  return (
    <HeaderWrapper>
      <Logo />
      <CategoryDropDownList categories={categories} />
      <SearchBar />
      <MyAcount />
      <Cart quantity="0" />
      <MdOutlineMenu className='menuMobileIcon'/>
   </HeaderWrapper>
  )
}
