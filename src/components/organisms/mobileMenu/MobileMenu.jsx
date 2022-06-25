import { useEffect } from 'react'
import { MdClose } from 'react-icons/md'
import carrinho from '../../../assets/svg/carrinho.svg'
import usuario from '../../../assets/svg/usuario.svg'
import CategoryDropDownList from '../../molecules/CategoryDropDownList'

import MenuMobileWrapper from './styled.mobileMenu'
export default function MobileMenu({
  visible,
  setVisible,
  categories }) {

  useEffect(() => {
    document.body.style.overflowY = visible ? 'hidden' : 'scroll'
  }, [visible])

  console.log(categories)
  return (
    <MenuMobileWrapper visible={visible}>

      <MdClose className='close_icon' onClick={setVisible} />
      <div className='menu_mobile_items'>
        <span className='cart'>
          Carrinho
          <img
            src={carrinho}
            alt="ícone de um carrinho de compras"
          />
        </span>
        <span className='acount'>
          Minha conta
          <img
            src={usuario}
            alt="ícone da silhueta de um ser humano que representa um usuário"
          />
        </span>
        <CategoryDropDownList
          categories={categories}
          isMobileMode={true}
        />
      </div>

    </MenuMobileWrapper>
  )
}


  //<a href="#home" onClick={setVisible}>Home</a>
    //      <a href="#contact" onClick={setVisible} >Contato</a>
      //    <a href="#habilities"onClick={setVisible} >Habilidades</a>
        //  <a href="#projects"onClick={setVisible} >Projetos</a>