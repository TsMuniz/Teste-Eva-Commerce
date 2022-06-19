import styled from 'styled-components'

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
    color: ${({theme}) => theme.accentColor};
    border-right: 1px solid #DADFEB;
    padding-inline: 6.4rem;
    &:last-child {
      border: none;
    }
  }
`

export default BenefitsWrapper