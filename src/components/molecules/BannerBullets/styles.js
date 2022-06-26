import styled from "styled-components"

const BulletsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translate(-50%);
  bottom: 3.5rem;

  @media (max-width: 1024px) {
    bottom: 2.5rem;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    bottom: 1rem;
  }
  
  @media (max-width: 475px) {
    img {
      display: none;
    }
  }

  @media (max-width: 375px) {
    img {
      display: none;
    }
  }
`;
export default BulletsWrapper;
