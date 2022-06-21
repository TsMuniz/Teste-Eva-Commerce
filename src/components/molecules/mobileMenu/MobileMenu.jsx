import React from 'react'
import MenuMobileWrapper from './styled.mobileMenu'
import {MdClose} from 'react-icons/md';
import { useEffect } from 'react';

export default function MobileMenu({visible,setVisible}) {
  useEffect(() => {
    document.body.style.overflowY = visible ? 'hidden': 'scroll';
  }, [visible]);
  
  return (
    <MenuMobileWrapper visible={visible}>
        
        <MdClose onClick={setVisible}/>        
        <nav>
          <a href="#home" onClick={setVisible}>Home</a>
          <a href="#contact" onClick={setVisible} >Contato</a>
          <a href="#habilities"onClick={setVisible} >Habilidades</a>
          <a href="#projects"onClick={setVisible} >Projetos</a>
        </nav>

    </MenuMobileWrapper>
  )
}
