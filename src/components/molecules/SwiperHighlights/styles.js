import styled from "styled-components";

const SwiperHighlightsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-inline: 16.5rem;
  position: relative;

  .arrow_left {
    color: ${({ theme }) => theme.accentColor};
    left: 0.5rem;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    font-size: 5rem;
    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .arrow_right {
    color: ${({ theme }) => theme.accentColor};
    right: 0.5rem;
    font-size: 5rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
    cursor: pointer;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .swiper {
    padding-inline: 0.08rem;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    gap: 1.2rem;
    padding-block: 0.5rem;
    &::-webkit-scrollbar {
      display: none;
    }
    @media (max-width: 1024px) {
      gap: 10rem;
    }

    @media (max-width: 768px) {
      gap: 1.2rem;
    }
  }

  @media (max-width: 1024px) {
    padding-inline: 3rem;
  }

  @media (max-width: 768px) {
    padding-inline: 1rem;
  }
`;
export default SwiperHighlightsWrapper;
