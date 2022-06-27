import styled from "styled-components"

const ImageWrapper = styled.div`
  width: 100vw;
  position: relative;
  display: flex;

  .title_wrapper {
    left: 16.4rem;
    top: 12.6rem;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 3;

    h1 {
      font-size: 4.2rem;
      color: #fdfdfd;
      font-weight: 400;
      line-height: 4.9rem;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    
    h3 {
      font-size: 2.4rem;
      color: #fdfdfd;
      font-weight: 400;
      line-height: 2.8rem;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 768px) {
      left: 1rem;
      h1 {
        font-size: 3.2rem;
      }
      h3 {
        font-size: 2rem;
      }
    }

    @media (max-width: 425px) {
      left: 1rem;
      h1 {
        font-size: 2.7rem;
      }
      h3 {
        font-size: 1.5rem;
        line-height: 0.8rem;

      }
    }
  }

  div {
    width: 100%;
    @media (max-width: 475px) {
      height: 20rem;
    }
    @media (max-width: 375px) {
      height: 20rem;
    }
  }

  div img {
    width: 100%;
    @media (max-width: 475px) {
      object-fit: cover;
    }
    @media (max-width: 375px) {
      object-fit: cover;
    }
  }

  &::after {
    content: "";
    height: 100%;
    width: 100vw;
    position: absolute;
    z-index: 1;
    background: linear-gradient(
      90.99deg,
      #000000 1.53%,
      rgba(32, 32, 32, 0.52) 56.83%,
      rgba(196, 196, 196, 0) 98.06%
    );
  }
`;
export default ImageWrapper;
