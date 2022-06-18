import styled from 'styled-components'

const BenefitsWrapper = styled.section`
  height: 20.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 23rem;
  div {
    display: flex;
    font-size: 1.6rem;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: ${({theme}) => theme.accentColor};
    gap: 1.5rem;
  }
`

export default BenefitsWrapper