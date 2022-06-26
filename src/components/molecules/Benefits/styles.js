import styled from "styled-components"

const BenefitsWrapper = styled.section`
  height: 20.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    font-size: 1.6rem;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-evenly;
    align-items: center;
    color: ${({ theme }) => theme.accentColor};
    border-right: 1px solid #dadfeb;
    padding-inline: 6.4rem;

    &:last-child {
      border: none;
    }

    @media (max-width: 768px) {
      padding-inline: 3.2rem;
      text-align: center;
    }

    @media (max-width: 375px) {
      text-align: center;
      border-right: none;
      padding-inline: 2.2rem;
      width: 15rem;
      font-size: 1.2rem;
    }
    
    @media (max-width: 320px) {
      font-size: 1.11rem;
      width: 16rem;
    }
  }

  @media (max-width: 375px) {
    justify-content: flex-start;
  }

  @media (max-width: 320px) {
    align-items: baseline;
    padding-top: 2rem;
    height: 13rem;
  }
`;

export default BenefitsWrapper;
