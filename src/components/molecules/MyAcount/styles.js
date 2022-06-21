import styled from 'styled-components'

const MyAcountWrapper = styled.div`
  display: flex;
  font-size: 1.6rem;
  align-items: baseline;
  color: white;
  gap: 1rem;
  img {
    color: white;
    width: 1.4rem;
    height: 1.6rem;
  }
  @media(max-width: 900px) {
  display: none;
 }
`

export default MyAcountWrapper