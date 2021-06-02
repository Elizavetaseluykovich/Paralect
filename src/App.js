import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/index';
import User from './components/User/User';
import Start from './components/Start/Start';
import Header from "./components/Header/Header";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Switch>
            <Route path="/user/:username">
              <User />
            </Route>
            <Route path="/">
              <Start />
            </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
