import * as C from './styles'

type Props = {
  title: string;
  description: string
  icon: string
}

const SelectOptions = ({title, description, icon}: Props) => {
  return(
    <C.Container>
     <C.Icon>{icon}</C.Icon>
     <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
     </C.Info>
    </C.Container>
  )
}

export default SelectOptions