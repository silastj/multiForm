import * as C from './styles'

type Props = {
  title: string;
  description: string
  icon: string
  selected: boolean
  onClick: () => void
}

const SelectOptions = ({title, description, icon, selected, onClick}: Props) => {
  return(
    <C.Container selected={selected} onClick={onClick}>
     <C.Icon>{icon}</C.Icon>
     <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
     </C.Info>
    </C.Container>
  )
}

export default SelectOptions