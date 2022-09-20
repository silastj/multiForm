import * as C from './styles'
import Theme from '../../components/Theme/index'
import { Link } from 'react-router-dom'

const FormStep1 = () => {

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label htmlFor="">
          Seu nome completo
          <input 
            type="text"
            autoFocus
           />
        </label>

        <Link to="/step2">Próximo</Link>
      </C.Container>
    </Theme>
  )
}

export default FormStep1