import React from 'react';
import {connect} from 'react-redux';
import store from '../../store';

const incluir = () => (
    store.dispatch({type:'LANGUAGES_INSERT'})
)

const Sidebar = ({language}) => (
    <div>
        <input type='text' value={language.language.name}></input>
        <button onClick={incluir}>Inserir</button>
    </div>
);

export default connect((state) => ({language: state}))(Sidebar);