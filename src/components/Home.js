import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import routesConfig from '../routes.config';

class Home extends Component {

  render () {
    return (
      <React.Fragment>
        {routesConfig.map((value, key) => {
          return <Route key={key}
              path={value.path}
              component={value.component}
              exact={value.exact}>
            </Route>
        })}
      </React.Fragment>
    );
  }
}

export default Home;
