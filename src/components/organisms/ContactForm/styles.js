import styled from "styled-components"

const ContactFormWrapper = styled.section`
  background-color: #3c3e40;
  height: 35.2rem;
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 475px) {
      padding-inline: 1rem;
    }
    .heading {
      color: #fdfdfd;
      font-size: 2.4rem;
      line-height: 2.813rem;
      @media (max-width: 475px) {
        width: 27.8rem;
      }
    }
    .controlInputs {
      display: flex;
      gap: 1.8rem;
      @media (max-width: 475px) {
        flex-direction: column;
        align-items: center;
      }
    }

  }

  button {
    background-color: ${({ theme }) => theme.accentColor};
    width: 26.6rem;
    height: 4.2rem;
    color: #fdfdfd;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.9rem;
    border: none;
    @media (max-width: 475px) {
      width: 27.8rem;
    }
  }
`;

export default ContactFormWrapper;
