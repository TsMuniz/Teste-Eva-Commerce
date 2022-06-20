import styled from 'styled-components'

const HighLightsSectionHeadingWrapper = styled.div`
  h3 {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;
    align-items: flex-start;
    margin-left: 16.5rem;
    margin-bottom: 4.2rem;

    &::before {
      content: '';
      width: 6.4rem;
      height: 0;
      border: 4px solid ${({theme}) => theme.accentColor};
    }
  }

`

export default HighLightsSectionHeadingWrapper