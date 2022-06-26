import styled, { css } from 'styled-components'

const InputWrapper = styled.div`
  background-color: #3C3E40;
  display: flex;
  flex-direction: column;
  height: 4.7rem;
  gap: 0.4rem;

  p {
    height: 1rem;
    color: #DADFEB;
    font-size: 1.2rem;
    line-height: 1.406rem;
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
    border: 0;
    border-bottom: 0.1rem solid #DADFEB;
    position: relative;    
      
    &::placeholder {     
      border-bottom: 0.1rem solid #DADFEB;     
      width: 26.812rem;     
    }

    ${({ theme, error }) => error &&    
      css`
      box-shadow: inset 0 0 0.1rem 0.1rem ${theme.accentColor};
      &::placeholder {
        color: ${theme.accentColor};
      }`     
    }

  }
`
export default InputWrapper