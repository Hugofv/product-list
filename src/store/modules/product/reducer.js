const InitialState = {
  collection: [],
  filter: '',
};


export default function product(state = InitialState, action) {
  switch (action.type) {
    case '@administrador/FETCH_ADMINISTRADORES_REQUEST':
      return {...state, loading: true}
    default:
      return state;
  }
}
