import { ReactNode } from 'react'
import * as C from './styles'
import Header from '../Header/index'

type Props = {
  children: ReactNode
}

const Theme = ({ children }: Props) => {
  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>
            <p>...Sidebar</p>
          </C.Sidebar>
          <C.Page>
            {children}
          </C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  )
}

export default Theme