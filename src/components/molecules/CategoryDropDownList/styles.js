import styled from 'styled-components'

const CategoryListWrapper = styled.div`
 display: flex;
 flex-direction: column;
 position: relative;

 div {
  cursor: pointer;
  display: flex;
  color: white;
  font-size: 1.6rem;
  align-items: baseline;
  gap: 1rem;
  img {
    width:0.894rem;
    height: 0.522rem;
    
  }
 }

 ul{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0;
  width: 16.7rem;
  height: 14rem;
  position: absolute;
  z-index: 10;
  top: 2.4rem;
  background: #FDFDFD;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
 }
`

export default CategoryListWrapper