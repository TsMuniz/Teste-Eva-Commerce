import styled from "styled-components"

const HeaderWrapper = styled.header`
  display: flex;
  padding-inline: 16.4rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.secondaryColor };
  height: 6.4rem;
`
export default HeaderWrapper