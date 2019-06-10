import React from 'react'
import store from '../../reducers/index';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {clearSubmit} from '../../reducers/utils'

const onSubmit = (form) => {
  form.preventDefault();  
  store.dispatch({type:'USUARIO_INSERT', submit: form.currentTarget.elements})
  clearSubmit(form.currentTarget.elements);
}

const UsuarioInsert = () => { 
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

export default UsuarioInsert;
