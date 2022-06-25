import { useState } from 'react'
import { MdOutlineMenu } from 'react-icons/md'
import Logo from '../../atoms/logo'
import Cart from '../../molecules/Cart'
import CategoryDropDownList from '../../molecules/CategoryDropDownList'
import MyAcount from '../../molecules/MyAcount'
import SearchBar from '../../molecules/SearchBar'
import MobileMenu from '../mobileMenu/MobileMenu'
import HeaderWrapper from './styles'

export default function Header({ categories }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <HeaderWrapper>
      <Logo />
      <CategoryDropDownList categories={categories} />
      <SearchBar />
      <MyAcount />
      <Cart quantity="0" />
      <MdOutlineMenu
        onClick={setShowMobileMenu}
        className='menuMobileIcon'
      />
      <MobileMenu
        visible={showMobileMenu}
        setVisible={() => setShowMobileMenu(!showMobileMenu)}
        categories={categories}
      />
    </HeaderWrapper>
  )
}
