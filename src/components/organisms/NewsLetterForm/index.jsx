import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import newsletter from '../../../assets/svg/newsletter.svg'
import NewsLetterInput from '../../atoms/NewsLetterInput'
import NewsLetterFormWrapper from './styles'


export default function NewsLetterForm() {
  const onlyLetters = /^[abcdefghijklmnopqrstuvçwxyz]+$/i

  const schema = yup.object({
    name: yup
      .string('Nome invalido!')
      .required('Campo Obrigatório!')
      .matches(onlyLetters, 'Apenas letras são permitidas')
      .min(4, 'Seu nome deve conter no minimo 4 letras'),
    email: yup
      .string('Email invalido!')
      .required('Campo Obrigatório!')
      .email('Email inválido!'),
  }).required()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })


  const onSubmit = (data) => {
    toast(
      `Obrigado por se cadastrar em nossa newsLetter ${data.name}. Em breve
        você ficará por dentro de todas as nossas novidades!`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar'
      }
    )
  }

  return (
    <NewsLetterFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="logo">
          <img src={newsletter} alt="ícone de uma carta na cor branca" />
        </div>
        <div className="heading">
          <h2>Receba nossas novidades, descontos e muito mais</h2>
        </div>
        <div className="controlInputs">
          <NewsLetterInput
            errorMessage={errors.name?.message}
            type="text"
            placeHolder='Digite seu nome'
            name="name"
            register={register}
          />

          <NewsLetterInput
            errorMessage={errors.email?.message}
            type="text"
            placeHolder='Digite seu Email'
            name="email"
            register={register}
          />
        </div>
        <button>Eu quero receber novidades!</button>
      </form>
    </NewsLetterFormWrapper>
  )
}
