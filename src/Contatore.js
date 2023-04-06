import { Button, FormControl } from '@mui/material'
import React, { useContext, useEffect, useState,useMemo, useCallback, useRef } from 'react'
import { ContatoreContext } from './context'
import { useNavigate } from 'react-router-dom'

const CHANGED  = "changed"


const INITIAL_STATE = {
  magicValues : [2,4,6,8],
  valuesM : [0,0,0,0],
};
const magicValues = [2,4,6,8];
let valuesM = [0,0,0,0]

function getValuesM(){
  return valuesM;
}

const contReducer = (state, action) => {
  switch(action.type){
    case CHANGED: {
      let tmp = []

      for(let i = 0; i <4; i ++){
        if(magicValues[i] === action.payload){
          for(let j = 0; j <valuesM.length; j ++){
            tmp.push(action.payoload);
          }
        }
      }
  
       if (tmp.length !== 0){
         valuesM = tmp;
       }     
       return {...state, magicValues};
    }
    default:{
      return state
    }
  }
}


 

const useStatusContatore = () => {
  
  const {state:{contatore},incrementaNumero, decrementaNumero, naviga}=useContext(ContatoreContext)
  const [contatoredue, setContatoredue] = useState(0);
  const [numeroClick, setNumeroClick] = useState(0);
  const ur = useRef(0)

  const valuesMemo = useMemo(() => valuesM, [valuesM]);

  const valuesCall = useCallback(
    () => {
      getValuesM();
    },
    [valuesM],
  );
  
  useEffect(() => {
    setNumeroClick(numeroClick+1);
    setContatoredue(contatoredue+1)
    dispatch({state:CHANGED, payload: numeroClick});

     ur.current = ur.current +1
    
  }, [contatore]);


 
  return({contatoreUno:contatore, contatoreDue:contatoredue, numClick:numeroClick, arrVals:getValuesM(), urVal:ur.current});

}


const Contatore = () => { 
  const {state:{contatore},incrementaNumero, decrementaNumero, naviga}=useContext(ContatoreContext)

 let status = useStatusContatore()
   return (
     <div>
         <Button variant='contained' onClick={() => {incrementaNumero(contatore);} }>Incrementa</Button>
         <Button variant='contained' onClick={() => {decrementaNumero(contatore);} }>Decrementa</Button>
         <p>Contatore in context = {status.contatoreUno}</p>
         <p>Contatore locale = {status.contatoreDue}</p>
         <p>Totale click effettuati =  {status.numClick}</p>
         <p>output memo =  {status.valuesMemo}</p>
         {/* <p>output callback =  {valuesCall}</p> */}
         <p>output useref =  {status.urVal}</p>



         <hr/>
         {/* <Button variant='contained' onClick={() => naviga(contatore, navigate) }>Incrementa</Button> */}
     </div>
   )
}
export default Contatore