import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100vw;
  position: relative;
  display: flex;

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
