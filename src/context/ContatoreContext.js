import createDataContext from "./createContext";

const INCREMENTA= "incrementa"
const DECREMENTA= "decrementa"
const NAVIGA="naviga"

const INITIAL_STATE = {
  contatore: 0,
  cambiamenti : 0,
};


const contatoreReducer = (state, action) => {
  switch (action.type) {
    case INCREMENTA: {
      const { contatore } = action.payload;
      const { cambiamenti } = action.payload;

      return { ...state, contatore};
    }  
    case DECREMENTA: {
        const { contatore } = action.payload;
        const { cambiamenti } = action.payload;

        return { ...state, contatore};
      }  
    case NAVIGA: {
        const { contatore } = action.payload;
        return { ...state, contatore};
      }  
    default: {
      return state;
    }
  }
};

const incrementaNumero = (dispatch) => async (numero, valore) => {  
    dispatch({ type: INCREMENTA, payload: { contatore: numero + 1, cambiamenti : valore+1} })
};

const decrementaNumero = (dispatch) => async (numero, valore) => {  
    dispatch({ type: INCREMENTA, payload: { contatore: numero - 1, cambiamenti : valore+1} })
};

const naviga = (dispatch) =>async (numero, navigate) =>{
  navigate("/login")
  dispatch({ type: INCREMENTA, payload: { contatore: numero - 1} })

}



export const { Provider, Context } = createDataContext(
    contatoreReducer,
  {
    incrementaNumero,
    decrementaNumero,
    naviga
  }, // actions
  INITIAL_STATE // initial state
);
