import {createStore} from 'redux';

const initialState = {
    usuario: {id: 0, nome:'', sobreNome: '', incluir: true},
    usuarios: []
};

function reducer(state = initialState, action){
    let submit;
    if (action.submit != undefined)
        submit = action.submit.currentTarget.elements;
    switch (action.type){
        case 'USUARIO_INSERT':
            let max = 0;
            state.usuarios.map(x => {
                if (x.id > max)
                    max = x.id;
            })
            return {
                ...state,
                usuarios:[...state.usuarios, {...bindInsert(state.usuario, submit), id: ++max,}]
            };
        case 'USUARIO_EDIT':
            let usuario = state.usuarios.filter(x => x.id == parseInt(submit.id.value))[0];
            return {
                ...state, usuario: {...usuario, incluir: false}
            }
        case 'USUARIO_EDIT_CANCELAR':
            return {
                ...state, usuario: { incluir: true}
            }
        case 'USUARIO_UPDATE':
            state.usuarios.map(x => {
                if (x.id == parseInt(submit.id.value)){
                    bind(x , submit);
                }                   
            })
            clear(state.usuario);
            return {
                ...state,
                usuarios: [...state.usuarios],
                usuario: {...state.usuario, incluir: true}
            }
        case 'USUARIO_DELETE':
            return {
                ...state,
                usuarios: [
                    ...state.usuarios.filter(x => x.id != parseInt(submit.id.value))
                ],
            }
        default:
            return state;
    }
}

const bind = (obj, submit) => {
    Object.keys(obj).map(function (key, idx) {
        obj[key] = submit[key].value;
    });
}

const bindInsert = (objBase, submit) => {
    let obj = {};
    Object.keys(objBase).map(function (key, idx) {
        if (submit[key] != undefined)
            obj[key] = submit[key].value;
    });
    return obj;
}

const clear = (obj) => {
    Object.keys(obj).map(function (key, idx) {
        obj[key] = '';
    });
}

const store = createStore(reducer);

export default store;