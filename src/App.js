/** @jsxImportSource @emotion/react */
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './index.css'

import Users from './pages/Users'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/users' component={Users} />
        <Redirect to='/users' />
      </Switch>
    </BrowserRouter>

  );
}

export default App

