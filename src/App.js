import { Redirect, Route } from 'react-router';
import Login from './components/login/Login';
import MainPage from './components/mainPage/MainPage';
import { useSelector } from 'react-redux';
import CreateContact from './components/add-createContact/CreateContact';
import EditContact from './components/add-createContact/EditContact';
import { Routing } from './Routing';

const App = () => {
  const isLogged = useSelector((s) => s.mainPage.isLogged);

  if (!isLogged) {
    return (
      <>
        <Redirect to={Routing.login} />
        <Route path={Routing.login} component={Login} />
      </>
    );
  } else {
    return (
      <>
        <Route exact path={Routing.root} component={MainPage} />
        <Route path={Routing.new} component={CreateContact} />
        <Route path={Routing.edit} component={EditContact} />
        <Route path={Routing.login} component={Login} />
      </>
    );
  }
};

export default App;
