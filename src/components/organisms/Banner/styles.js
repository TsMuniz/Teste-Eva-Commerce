import styled from 'styled-components'

const BannerWrapper = styled.section`
  position: relative;
  border: none;
  div {
    border: none;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    flex: none;
    z-index: 1;
    &.item { 
      border: none;
      z-index: 0;
      flex-basis: 100%;
      border: 1px solid black;
      img {
        transform: matrix(1, -0.05, 0.07, 1, 0, 0);
        width: 100%;
      }
    }
    &.scrollCircle {
      position: absolute;
      left: 50%;
      bottom: 10%;
    }
    
    &::-webkit-scrollbar {
      display: none;
    }
  }

`

export default BannerWrapper