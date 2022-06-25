import InputWrapper from './styles'

export default function NewsLetterInput({
  placeHolder,
  register,
  name,
  errorMessage
}) {
  return (
    <InputWrapper>
      <p>{errorMessage}</p>
      <input
        {...register(`${name}`)}
        type="text"
        placeholder={placeHolder} />
    </InputWrapper>
  )
}
