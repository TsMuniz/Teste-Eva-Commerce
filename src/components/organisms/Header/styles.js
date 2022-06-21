import styled from "styled-components"

const HeaderWrapper = styled.header`
  display: flex;
  padding-inline: 16.4rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.secondaryColor };
  height: 6.4rem;
  gap: 1rem;

  .menuMobileIcon {
    color: white;
    font-size: 5rem;
    @media(max-width: 375px) {
    font-size: 10rem;
    }
    @media(min-width: 900px) {
      display: none;
    }

  }

  @media(max-width: 1200px) {
    padding-inline: 3rem;
  }
  @media(max-width: 950px) {
    padding-inline: 1rem;
  }  
`
export default HeaderWrapper