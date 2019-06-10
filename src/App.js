import React, { Component } from 'react';
import {Provider} from 'react-redux';
import './App.css';
import store from './store';
import ListaUsuarios  from './components/Usuario/ListaUsuarios';
import UsuarioForm from './components/Usuario/UsuarioForm';

class App extends Component {
  render() {    
    return (
      <div className="container col-md-4">
        <Provider store={store}>          
          <UsuarioForm></UsuarioForm>
          <br/>
          <ListaUsuarios></ListaUsuarios>
        </Provider>
          
      </div>
    );
  }
}

export default App;