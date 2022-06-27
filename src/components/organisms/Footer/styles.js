import styled from "styled-components"

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  height: 25.6rem;
  background-color: ${({ theme }) => theme.secondaryColor};
  padding-inline: 16.4rem;

  .footer_top {
    height: 8.5rem;
    display: flex;
    align-items: center;

    h2 {
      color: ${({ theme }) => theme.accentColor};
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 2.8rem;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      
      &::after {
        content: '';
        width: 10rem;
        height: 0;
        border: 0.2rem solid #FDFDFD;
        margin-left: 0.2rem;
      }
    }
  }

  .footer_bottom {
    display: flex;
    height: 17.1rem;
    gap: 10rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 1.3rem;
      img {
        width: 2rem;
        height: 2rem;
      }
    }

    p, span {
      display: flex;
      align-items: canter;
      gap: 0.6rem;
      color: #FDFDFD;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      img {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }

  @media(max-width: 768px) {
    padding-inline: 1rem;
    height: auto;
    .footer_bottom {
      height: auto;
      padding-bottom: 2rem;
    }
  }

  @media(max-width: 425px) {
    padding-inline: 1rem;
    height: auto;
    .footer_bottom {
      height: auto;
      flex-direction: column;
      align-items: baseline;
      gap: 3rem;
    }
  }
`
export default FooterWrapper;
