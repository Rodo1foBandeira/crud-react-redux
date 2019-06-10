import React from 'react'
import {connect} from 'react-redux';
import store from '../../store';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import UsuarioInsert from './UsuarioInsert';
import UsuarioEdit from './UsuarioEdit';

const onSubmit = (form) => {
  form.preventDefault();  
  store.dispatch({type:'USUARIO_INSERT', submit: form})
}

const UsuarioForm = (usuario) => { 
  return (   
      (usuario.state.botaoSalvar == 'Incluir') ? <UsuarioInsert></UsuarioInsert> : <UsuarioEdit></UsuarioEdit>
  )
}

export default connect((state) => ({state: state.usuario}))(UsuarioForm);
