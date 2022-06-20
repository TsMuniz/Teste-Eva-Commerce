import styled from 'styled-components'

const SwiperHighlightsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-inline: 16.5rem;
  position: relative;

  .arrow_left {
    color: ${({theme}) => theme.accentColor};
    left: 11.3rem;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    font-size: 5rem;
    cursor: pointer;
  }

  .arrow_right {
    color: ${({theme}) => theme.accentColor};
    right: 11.3rem;
    font-size: 5rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transform: rotate(180deg);
    cursor: pointer;
  }

  .swiper {
      padding-inline: 0.08rem;
      display: flex;
      overflow-x: auto;
      scroll-behavior: smooth;
      gap: 1.2rem;
      padding-block:0.5rem;
      &::-webkit-scrollbar {
        display: none
      }
    }    
`
export default SwiperHighlightsWrapper