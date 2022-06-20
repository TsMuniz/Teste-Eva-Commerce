import styled from 'styled-components'

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
    background-color: #F7FAFF;
    width: 23.6rem;
    height: 15.8rem;

    h5 {
      align-self: center;
      width: 18.2rem;
      height: 3.2rem;
      margin-top: 0.8rem;
      font-size: 1.4rem;
      font-weight: 300;
      color: #6A6D6F;
    }

    .product_price_container {
      display: flex;
      flex-direction: column;
      align-self: center;

      p {
        color: #6A6D6F;
        height: 1.4rem;
        font-size: 1.2rem;
        text-decoration: line-through;
        align-self: flex-end;
      }
  
      h2 {
        font-size: 3.2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.accentColor};
        margin-bottom: 0.4rem;
        align-self: center;
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
    background-color: #F7FAFF;
    transition: 0.2s;
    flex-grow: 1;

    button {
      align-self: center;
      width: 22.8rem;
      height: 4.2rem;
      color: #FDFDFD;
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
  
  }
`
export default ProductCardWrapper