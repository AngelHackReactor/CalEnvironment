import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing.jsx';
import Dashboard from './components/Dashboard.jsx';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing}/>
          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    )
  }
}



ReactDOM.render(<App/>, document.getElementById('app'));
