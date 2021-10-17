import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import LogIn from './pages/LogIn';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/acadbase/logIn" component={LogIn} />
          <Redirect from="" to="/acadbase/logIn"/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
