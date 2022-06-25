import styled from "styled-components"

const ProductCardWrapper = styled.div`
  width: 23.6rem;
  height: 45.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.4rem;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.accentColor};
  }

  .product_image_container {
    width: 20rem;
    height: 23.6rem;
    display: flex;
    align-items: center;
    padding: 0;
    img {
      object-fit: scale-down;
      width: 100%;
      height: 90%;
    }
  }

  .product_details_container {
    display: flex;
    flex-direction: column;
    background-color: #f7faff;
    width: 23.6rem;
    height: 14.8rem;

    h5 {
      margin-top: 0.8rem;
      align-self: center;
      width: 18.2rem;
      height: 3.2rem;
      margin-top: 0.8rem;
      font-size: 1.4rem;
      font-weight: 300;
      color: #6a6d6f;
      overflow: hidden;
    }

    .product_price_container {
      display: flex;
      flex-direction: column;
      align-self: center;

      p {
        color: #6a6d6f;
        height: 1.4rem;
        font-size: 1.2rem;
        text-decoration: line-through;
        align-self: flex-end;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 3.2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.accentColor};
        margin-bottom: 1rem;
        align-self: center;
        line-height: 3.2rem;
        font-style: normal;
      }
    }

    span {
      align-self: center;
      height: 1.2rem;
      margin-bottom: 0.4rem;
      font-size: 1rem;
    }
  }

  .product_button_container {
    background-color: #f7faff;
    transition: 0.2s;
    flex-grow: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: inherit;

    button {
      align-self: center;
      width: 22rem;
      height: 4.2rem;
      color: #fdfdfd;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.accentColor};
      border: none;
      border-radius: 0.8rem;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.9rem;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .product_button_container_tablet_and_mobile_resolution {
    background-color: #f7faff;
    transition: 0.2s;
    flex-grow: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;

    button {
      align-self: center;
      width: 22.8rem;
      height: 4.2rem;
      color: #fdfdfd;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.accentColor};
      border: none;
      border-radius: 0.8rem;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 19px;
    }
    @media (min-width: 769px) {
      display: none;
    }
  }
  @media (max-width: 769px) {
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
    border-style: inset;
  }
`;
export default ProductCardWrapper;
