import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AllProducts from './screens/AllProducts';
import ProductPage from './screens/ProductPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AllProducts} />
        <Route path="/product/:id" component={ProductPage} />
      </Switch>
    </Router>
  );
};

export default App;
