import styled from 'styled-components'

const SwiperHighlightsWrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 1.5rem;
  }
    .swiper {
      width:131.5rem;
      display: flex;
      overflow-x: auto;
      scroll-behavior: smooth;
      flex: none;
      gap: 2.7rem;
      padding-block:0.5rem;
      padding-inline: 0.1rem;

      &::-webkit-scrollbar {
        display: none
      }
    }    
`
export default SwiperHighlightsWrapper