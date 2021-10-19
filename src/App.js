import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import LogIn from './pages/LogIn';
import AdminDashboard from './pages/AdminDashboard';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/acadbase/logIn" component={LogIn} />
          <Route exact path="/acadbase/AdminDashboard" component={AdminDashboard} />
          <Redirect from="" to="/acadbase/logIn"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
