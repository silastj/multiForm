import * as C from './styles'
import { ChangeEvent, useEffect } from 'react'
import Theme from '../../components/Theme/index'
import { useHistory } from 'react-router-dom'
import {useForm, FormActions} from '../../contexts/FormContext'

const FormStep1 = () => {

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  },[])

  const history = useHistory()
  const {state, dispatch} = useForm()
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }


  const handleNextStep = () => {
    state.name !== '' ? 
    history.push('/step2') 
    : 
    alert('Prencha os seus dados. ')
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3 </p>
        <h1>Vamos começar com seu nome.</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input 
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
            placeholder="Digite seu nome"
           />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  )
}

export default FormStep1