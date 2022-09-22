import * as C from './styles'
import { useEffect } from 'react'
import Theme from '../../components/Theme/index'
import { useHistory, Link } from 'react-router-dom'
import {useForm, FormActions} from '../../contexts/FormContext'
import SelectOptions from '../../components/SelectOptions'

const FormStep2 = () => {
  const history = useHistory()
  const {state, dispatch} = useForm()

  useEffect(() => {
    state.name === '' ? history.push('/') : 
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  },[])


  const changeLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload:level
    })
  }

  const handleNextStep = () => {
    state.name !== '' ? 
    history.push('/step3') 
    : 
    alert('Prencha os seus dados. ')
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3 </p>
        <h1>{state.name}, o que melhor descreve você.</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

        <hr />
      <SelectOptions
        title="Sou iniciante"
        description="Comecei a programar há menos de 2 anos"
        icon="👶"
        selected={state.level === 0}
        onClick={() => {changeLevel(0)}}
        />
      <SelectOptions
        title="Sou programador"
        description="Já programo há 2 anos ou mais"
        icon="👩‍💻"
        selected={state.level === 1}
        onClick={() => {changeLevel(1)}}
      />
        <p>{state.level}</p>
        <Link to="/">Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  )
}

export default FormStep2