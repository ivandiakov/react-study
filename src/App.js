import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside />
        <div className="content">
          <Route exact render={ () => <Main />} path="/profile"></Route>
          <Route exact render={ () => <DialogsContainer />} path="/dialogs"></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;