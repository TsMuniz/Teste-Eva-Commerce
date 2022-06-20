import estrelaCheia from '../../../assets/svg/estrelaCheia.svg'
import estrelaVazia from '../../../assets/svg/estrelaVazia.svg'
import RatingWrapper from './styles'

export default function Rating({rating}) {
  let starsArray = []

  for (let index = 1; index <= 5; index += 1) {
    starsArray = index <= rating
      ? starsArray = [...starsArray, estrelaCheia]
      : starsArray = [...starsArray, estrelaVazia]
  }

  return (
    <RatingWrapper>
      {starsArray.map((star,index) => {
        return (
          <img
            key={`${star}${index}`}
            src={star}
            alt="ícone de uma estrela"
          />)
      })}
    </RatingWrapper>
  )
}
