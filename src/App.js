import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { renderRoutes } from "./config/routes"; 
import './App.less';
import './layout/common.scss';

const App = () => (
  <div className="App">
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          {renderRoutes.map(([key, route]) => (
            <Route key={key} path={route.path} exact={route.exact} component={route.component} />
          ))}
        </Switch>
      </BrowserRouter>
    </Suspense>
  </div>
);

export default App;
