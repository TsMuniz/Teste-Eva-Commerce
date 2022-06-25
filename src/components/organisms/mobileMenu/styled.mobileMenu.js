/* eslint-disable no-undef */
import styled from "styled-components"

const MenuMobileWrapper = styled.div`
  opacity: 0.96;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.secondaryColor};
  padding-top: 6rem;

  .close_icon {
    color: white;
    font-size: 3rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .menu_mobile_items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span {
      display: flex;
      font-size: 1.6rem;
      align-items: baseline;
      color: white;
      gap: 1rem;
      
      img {
        color: white;
        width: 1.4rem;
        height: 1.6rem;
      }
    }
  }

  ${({ visible }) => !visible && `display: none`}
`;

export default MenuMobileWrapper;
