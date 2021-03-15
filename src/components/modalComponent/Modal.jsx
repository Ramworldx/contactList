import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import CreateContact from "../add-createContact/CreateContact";
import EditContact from "../add-createContact/EditContact";
import '../../styles/modal.scss'

const Modal = ({ edit, children, id }) => {

  return (
    <Router>
      <ModalSwitch edit={edit} children={children} id={id} />
    </Router>
  )
}

const ModalSwitch = ({ edit, children, id }) => {

  return (
    <>
      <Switch>
        <Route path="/" children={<ButtonView edit={edit} children={children} id={id} />} />
      </Switch>

      <Route path="/:id/edit" children={<ModalWindow />} />
      <Route path="/new" children={<ModalWindow />} />
    </>
  )
}

const ButtonView = ({ edit, children, id }) => {

  return (
    <div>
      {edit === "edit" ?
        <Link to={{ pathname: `/${id}/edit` }} key={id}>
          {children}
        </Link>
        :
        <Link to={{ pathname: `/new` }}>
          <button className='ButtonViev_button-newContact'>
            <p>New Contact</p>
          </button>
        </Link>
      }
    </div>
  )
}

const ModalWindow = () => {
  let location = useLocation()
  let showComponent = location.pathname

  return (
    <div className='ModalWindow__modalBackground'>
      {showComponent === '/new' ? <CreateContact /> : <EditContact />}
    </div>
  )
}

export default Modal