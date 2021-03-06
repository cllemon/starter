import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import routes from './list';

function RouterView(route) {
  return (
    <Route
      path={route.path}
      render={props => {
        if (route.redirect) {
          return <Redirect to={route.redirect} />;
        }
        return (
          <route.component
            {...props}
            render={() => (
              <Switch>
                {route.routes.map(children => (
                  <RouterView key={children.path} {...children} />
                ))}
              </Switch>
            )}
          />
        );
      }}
    />
  );
}

export default function Router() {
  return (
    <HashRouter>
      <Switch>
        {routes.map(route => (
          <RouterView key={route.path} {...route} />
        ))}
      </Switch>
    </HashRouter>
  );
}
