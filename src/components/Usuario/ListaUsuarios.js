import React from 'react';
import {connect} from 'react-redux';
import Table from 'react-bootstrap/Table'
import store from '../../reducers/index';
import Button from 'react-bootstrap/Button'

const onSubmit = (form) => {
    form.preventDefault();  
    store.dispatch({type:'USUARIO_EDIT', submit: form.currentTarget.elements})
}

const onSubmitDelete = (form) => {
    form.preventDefault();  
    store.dispatch({type:'USUARIO_DELETE', submit: form.currentTarget.elements})
}

const ListaUsuarios = (usuario) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>     
                    <th>#</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Açoes</th>
                </tr>
            </thead>
            <tbody>
            {
                usuario.lista.map(
                    u => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.nome}</td>
                            <td>{u.sobreNome}</td>
                            <td>
                                <div className='form-inline'>
                                    <form onSubmit={onSubmit}>
                                        <Button className='btn-warning' type="submit">Editar</Button>
                                        <input name="id" type="hidden" value={u.id}/>
                                    </form>
                                    <form onSubmit={onSubmitDelete}>
                                        <Button type="submit" className='btn-danger'>Excluir</Button>
                                        <input name="id" type="hidden" value={u.id}/>
                                    </form>
                                </div>                            
                            </td>
                        </tr>                        
                    )
                )
            }     
            </tbody>       
        </Table>
    )
}

export default connect((state) => ({lista: state.usuario.lista}))(ListaUsuarios);