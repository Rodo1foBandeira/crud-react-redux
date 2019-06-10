import React from 'react'
import {connect} from 'react-redux';
import UsuarioInsert from './UsuarioInsert';
import UsuarioEdit from './UsuarioEdit';

const UsuarioForm = (usuario) => { 
  return (   
      usuario.base.incluir ? <UsuarioInsert></UsuarioInsert> : <UsuarioEdit></UsuarioEdit>
  )
}

export default connect((state) => ({base: state.usuario.base}))(UsuarioForm);
