import * as C from './styles'
import { ChangeEvent, useEffect } from 'react'
import Theme from '../../components/Theme/index'
import { useHistory, Link } from 'react-router-dom'
import {useForm, FormActions} from '../../contexts/FormContext'

const FormStep3 = () => {
  const history = useHistory()
  const {state, dispatch} = useForm()

  useEffect(() => {
    state.name === '' ? history.push('/') :
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    })
  },[])

  const handleNameEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleNameUrl = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }


  const handleNextFinish = () => {
    state.email !== '' && state.github !== '' ? 
    console.log(state)
    : 
    alert('Prencha os seus dados.')
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Legal {state.name} começar com seu nome.</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Qual o seu email ?
          <input 
            type="email"
            value={state.email}
            onChange={handleNameEmail}
            placeholder="Digite seu email"
           />
        </label>

        <label>
          Qual o seu github ?
          <input 
            type="url"
            value={state.github}
            onChange={handleNameUrl}
            placeholder="Digite seu github"
           />
        </label>
        <Link to="/step2">Voltar</Link>
        <button onClick={handleNextFinish}>Finalizar</button>
      </C.Container>
    </Theme>
  )
}

export default FormStep3