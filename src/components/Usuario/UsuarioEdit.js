import React from 'react'
import {connect} from 'react-redux';
import store from '../../reducers/index';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const onSubmit = (form) => {
  form.preventDefault();  
  store.dispatch({type:'USUARIO_UPDATE', submit: form.currentTarget.elements})
}

const cancelar = () => {
  store.dispatch({type:'USUARIO_EDIT_CANCELAR'})
}

const UsuarioEdit = (usuario) => { 
  return (         
      <Form onSubmit={onSubmit}>
        <h2>Editar Usuario</h2>
        <input name="id" type="hidden" value={usuario.base.id}/>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control name="nome" type="text" defaultValue={usuario.base.nome}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control name="sobreNome" type="text" defaultValue={usuario.base.sobreNome}/>
        </Form.Group>
        
        <Button type="submit">Salvar</Button>
        <Button className='btn-danger' onClick={cancelar}>Cancelar</Button>
      </Form>
  )
}

export default connect((state) => ({base: state.usuario.base}))(UsuarioEdit);