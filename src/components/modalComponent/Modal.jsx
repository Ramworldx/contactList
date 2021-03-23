import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import CreateContact from '../add-createContact/CreateContact';
import EditContact from '../add-createContact/EditContact';
import { Routing } from '../../Routing';

const Modal = ({ edit, children, id }) => {

  return (
    <Router basename={Routing.homePageUrl}>
      <ModalSwitch edit={edit} children={children} id={id} />
    </Router>
  )
}

const ModalSwitch = ({ edit, children, id }) => {

  return (
    <>
      <Switch>
        <Route path={Routing.root} children={<ButtonView edit={edit} children={children} id={id} />} />
      </Switch>

      <Route path={Routing.edit} children={<ModalWindow />} />
      <Route path={Routing.new} children={<ModalWindow />} />
    </>
  )
}

const ButtonView = ({ edit, children, id }) => {

  return (
    <div>
      {edit === 'edit' ?
        <Link to={{ pathname: `/${id}/edit` }} key={id}>
          {children}
        </Link>
        :
        <Link to={{ pathname: `${Routing.new}` }}>
          <button className='ButtonViev_button-newContact'>
            <p>New Contact</p>
          </button>
        </Link>
      }
    </div>
  )
}

const ModalWindow = () => {
  const location = useLocation()
  const showComponent = location.pathname

  return (
    <div className='ModalWindow__modalBackground'>
      {showComponent === `${Routing.new}` ? <CreateContact /> : <EditContact />}
    </div>
  )
}

export default Modal