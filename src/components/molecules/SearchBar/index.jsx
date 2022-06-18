import busca from '../../../assets/svg/busca.svg'
import SearchBarWrapper from './styles'

export default function SearchBar() {
  return (
    <SearchBarWrapper>
      <input type="text" />
      <img src={busca} alt="ícone de uma lupa" />
    </SearchBarWrapper>
  )
}
