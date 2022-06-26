import styled from 'styled-components'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-block: 1.6rem;

  img{
    width: 8rem;
    height: 3.2rem;
  }
  
  @media(max-width: 320px) {
    img {
      width: 5rem;
      height: 2rem;
    }
  }
`

export default LogoWrapper