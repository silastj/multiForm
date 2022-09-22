import * as C from './styles'
import { Link } from 'react-router-dom'
import { ReactComponent as ProfileIcon } from '../../assets/images/profile.svg'
import { ReactComponent as BookIcon } from '../../assets/images/book.svg'
import { ReactComponent as MailIcon } from '../../assets/images/mail.svg'
import { useHistory } from 'react-router-dom'
type Props = {
  title: string
  description: string
  icon: string
  path: string
}

const SideBarItem = ({ title, description, icon, path }: Props) => {
  const history = useHistory()
  const resLocation = history.location.pathname

  return (
    <C.Container>
      <Link to={path}>
        <C.Header>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Header>
        <C.Footer>
          <C.Icon>
            {icon === 'profile' &&
              <ProfileIcon fill="white" width={24} height={24} />
            }
          </C.Icon>
          <C.Icon>
            {icon === 'book' && 
              <>
              <BookIcon fill="white" width={24} height={24} />
              {resLocation === path &&
                <C.State path={path}></C.State>
              }              
              </>
            }
          </C.Icon>
          
          <C.Icon>
            {icon === 'mail' &&
              <MailIcon fill="white" width={24} height={24} />
            }
          </C.Icon>
          {resLocation === path &&
            <C.State path={path}></C.State>
          }
          
         
        </C.Footer>
      </Link>
    </C.Container>
  )
}

export default SideBarItem