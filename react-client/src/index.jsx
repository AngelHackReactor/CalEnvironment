import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Landing from './components/Landing.jsx';
import Dashboard from './components/Dashboard.jsx';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

class App extends React.Component {

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Route exact path="/" component={Landing}/>
            <Route path="/dashboard" component={Dashboard}/>
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}



ReactDOM.render(
  <Provider store={store}>
    <div>
      <App/>
    </div>
  </Provider>,
  document.getElementById('app'));
