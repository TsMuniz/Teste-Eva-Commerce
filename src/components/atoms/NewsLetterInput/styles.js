import styled from 'styled-components'

const InputWrapper = styled.div`
  background-color: #3C3E40;
  display: flex;
  flex-direction: column;
  height: 4.4rem;
  color: #fdfdfd;
  p {
    height: 1rem;
  }
  input {
      width: 27.8rem;
      height: 3.2rem;
      background-color: #fdfdfd;
      border-radius: 0.4rem;
      color: #3c3e40;
      font-size: 1.4rem;
      padding-inline: 0.5rem;
      outline: none;
      border: none;
      ${({ theme, error }) => error &&
        `box-shadow: 0 0 1px 1px ${theme.accentColor}`}
  }
`
export default InputWrapper