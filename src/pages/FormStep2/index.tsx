import * as C from './styles'
import { useEffect } from 'react'
import Theme from '../../components/Theme/index'
import { useHistory } from 'react-router-dom'
import {useForm, FormActions} from '../../contexts/FormContext'
import SelectOptions from '../../components/SelectOptions'

const FormStep2 = () => {

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  })

  const history = useHistory()
  const {state, dispatch} = useForm()
  // const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   dispatch({
  //     type: FormActions.setName,
  //     payload: e.target.value
  //   })
  // }


  const handleNextStep = () => {
    state.name !== '' ? 
    history.push('/step2') 
    : 
    alert('Prencha os seus dados. ')
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3 - {state.currentStep}</p>
        <h1>Vamos começar com seu nome.</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />
      <SelectOptions
        title="Sou iniciante"
        description="Comecei a programar há menos de 2 anos"
        icon="👶"
      />
      <SelectOptions
        title="Sou programador"
        description="Já programo há 2 anos ou mais"
        icon="👩‍💻"
      />

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  )
}

export default FormStep2