import styled from 'styled-components'

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #FDFDFD;
  flex-basis: 45rem;
  border-radius: 0.4rem;
  height: 3.2rem;
  border: none;
  padding-inline-end: 0.8rem;
  flex-shrink: 2;

  input {
    flex-grow: 1;
    height: 2.9rem;
    outline: none;
    border: none;
    border-radius: inherit;
  }

  img {
    width: 1.6rem;
    height: 1.6rem;
  }
`

export default SearchBarWrapper