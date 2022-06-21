import styled from 'styled-components'

const ContactFormWrapper = styled.section`
  background-color: #3C3E40;
  height: 35.2rem;
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .heading {
      color: #FDFDFD;
      font-size: 2.4rem;
      line-height: 2.813rem;
    }
    .controlInputs {
      display: flex;
      gap: 1.8rem;
    }

    input {
      width: 27.8rem;
      height: 3.2rem;
      background-color: #FDFDFD;
      border-radius: 0.4rem;
      color: #3C3E40;
      font-size: 1.4rem;
      padding-inline: 0.5rem;
      outline: none;
      border: none;
    }
  }

  button {
    background-color: ${({ theme }) => theme.accentColor};
    width: 26.6rem;
    height: 4.2rem;
    color: #FDFDFD;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.9rem;
    border: none;
  }
`

export default ContactFormWrapper