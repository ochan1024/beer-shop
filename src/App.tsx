import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import BeersPage from './pages/Beers'
import CartPage from './pages/Cart'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={BeersPage} />
            <Route path="/beers" component={BeersPage} />
            <Route path="/cart" component={CartPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
