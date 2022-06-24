import styled from "styled-components";

const CategorriesSectionItemWrapper = styled.div`
  width: 23rem;
  height: 25.6rem;
  position: relative;
  img {
    width: 100%;
  }
  h3 {
    position: absolute;
    font-weight: 700;
    bottom: 1.6rem;
    font-size: 3.2rem;
    line-height: 3.8rem;
    color: #fdfdfd;
    left: 50%;
    transform: translate(-50%);
    text-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    @media (max-width: 375px) {
      font-size: 2rem;
    }
    @media (max-width: 425px) {
      font-size: 2rem;
    }
  }

  @media (max-width: 425px) {
    width: 13rem;
    height: 15.6rem;
  }

  @media (max-width: 375px) {
    width: 11rem;
    height: 13.6rem;
  }
  @media (max-width: 320px) {
    width: 9.5rem;
    height: 12.1rem;
  }
`;
export default CategorriesSectionItemWrapper;
