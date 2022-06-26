import styled from "styled-components"

const CategorySectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding-inline: 16.5rem;
  margin-bottom: 6.4rem;

  @media (max-width: 1024px) {
    padding-inline: 3rem;
  }
  
  @media (max-width: 768px) {
    padding-inline: 1rem;
  }

  @media (max-width: 425px) {
    padding-inline: 1rem;
  }
`;

export default CategorySectionWrapper;
