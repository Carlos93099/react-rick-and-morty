import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CharacterContainer from './Character/CharacterContainer';
import CharacterDetail from './Character/CharacterDetail'

import Menu from './shared/Menu'


const Example = () => <h1>Example Works!</h1>
const NotFound = () => <h1>404</h1>

export default () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={CharacterContainer} />
        <Route path="/character-detail/:id" component={CharacterDetail}/>
        <Route path="/example" component={Example} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}