import MainPageTemplateWrapper from './styles'

export default function MainPageTemplate({children}) {
  return (
    <MainPageTemplateWrapper>
      {children}
    </MainPageTemplateWrapper>
  )
}
