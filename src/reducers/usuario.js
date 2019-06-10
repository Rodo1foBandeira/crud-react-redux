import {bind, clear, bindCreate} from './utils';

const initialState = {
    base: {id: 0, nome:'', sobreNome: '', incluir: true},
    lista: []
};

export default function usuario(state = initialState, action){
    switch (action.type){
        case 'USUARIO_INSERT':
            let max = 0;
            state.lista.map(x => {
                if (x.id > max)
                    max = x.id;
            })
            return {
                ...state,
                lista:[...state.lista, {...bindCreate(state.base, action.submit), id: ++max,}]
            };
        case 'USUARIO_EDIT':
            let usuario = state.lista.filter(x => x.id == parseInt(action.submit.id.value))[0];
            return {
                ...state, base: {...usuario, incluir: false}
            }
        case 'USUARIO_EDIT_CANCELAR':
            return {
                ...state, base: { incluir: true}
            }
        case 'USUARIO_UPDATE':
            state.lista.map(x => {
                if (x.id == parseInt(action.submit.id.value)){
                    bind(x , action.submit);
                }                   
            })
            clear(state.base);
            return {
                ...state,
                lista: [...state.lista],
                base: {...state.base, incluir: true}
            }
        case 'USUARIO_DELETE':
            return {
                ...state,
                lista: [
                    ...state.lista.filter(x => x.id != parseInt(action.submit.id.value))
                ],
            }
        default:
            return state;
    }
}