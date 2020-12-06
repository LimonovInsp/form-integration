import React from 'react';
import './reset.css';
import './inlinePseudo.css';
import Layout from "./screens/Layout/components/Layout";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


const App: React.FC = () => {

  const routes = (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Layout} />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  );
  return <>{routes}</>
}

export default App;
