import { Route, useHistory } from "react-router";
import Login from "./components/login/Login";
import MainPage from "./components/mainPage/MainPage";
import { useSelector } from "react-redux";
import CreateContact from "./components/add-createContact/CreateContact";
import EditContact from "./components/add-createContact/EditContact";

const App = () => {
  const isLogged = useSelector((s) => s.mainPage.isLogged);
  const history = useHistory();

  if (!isLogged) {
    history.push("/login");
    return (
      <div>
        <Route path="/login" component={Login} />
      </div>
    );
  } else {
    return (
      <div>
        <Route exact path="/" component={MainPage} />
        <Route path="/new" component={CreateContact} />
        <Route path="/:id/edit" component={EditContact} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
};

export default App;
