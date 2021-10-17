
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
      </Router>
    </div>
  );
}

export default App;
