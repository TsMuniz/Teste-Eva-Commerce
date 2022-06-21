import styled from 'styled-components'

const BannerWrapper = styled.section`
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 88%, 0% 100%);

  div{
    overflow-y: hidden;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    flex: none;
    z-index: 1;

    &::-webkit-scrollbar {
      display: none
    }
   
  }
  @media(max-width: 768px) {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
  }
`

export default BannerWrapper