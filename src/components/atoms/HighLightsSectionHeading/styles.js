import styled from 'styled-components'

const HighLightsSectionHeadingWrapper = styled.div`
  h3 {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;
    align-items: flex-start;

    &::before {
      content: '';
      width: 6.4rem;
      height: 0;
      border: 0.4rem solid ${({theme}) => theme.accentColor};
    }
  }

`

export default HighLightsSectionHeadingWrapper