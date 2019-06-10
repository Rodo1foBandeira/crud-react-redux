import React from 'react'
import {connect} from 'react-redux';
import store from '../../store';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const onSubmit = (form) => {
  form.preventDefault();  
  store.dispatch({type:'USUARIO_INSERT', submit: form})
  form.currentTarget.elements.nome.value = '';
  form.currentTarget.elements.sobreNome.value = '';
}

const UsuarioInsert = (usuario) => { 
  return (   
      <Form onSubmit={onSubmit}>
        <h2>Iserir Usuario</h2>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control name="nome" type="text"/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control name="sobreNome" type="text" />
        </Form.Group>
        
        <Button type="submit">Incluir</Button>
      </Form>
  )
}

export default connect((state) => ({state: state.usuario}))(UsuarioInsert);
