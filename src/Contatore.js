import { Button, FormControl } from '@mui/material'
import React, { useContext, useEffect, useState,useMemo, useCallback, useRef } from 'react'
import { ContatoreContext } from './context'
import { useNavigate } from 'react-router-dom'

const magicValues = [2,4,6,8];
let valuesM = [0,0,0,0]

function getValuesM(){
  return valuesM;
}
const Contatore = () => {
  
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
    setNumeroClick(numeroClick+1)
    let tmp = []

    for(let i = 0; i <4; i ++){
      if(magicValues[i] === numeroClick){
        for(let j = 0; j <valuesM.length; j ++){
          tmp.push(numeroClick);
        }
      }
    }

     if (tmp.length != 0){
       valuesM = tmp;
     }

     ur.current = ur.current +1
    
  }, [contatoredue]);

  //cerca il valore di numeroClick in magicValues
 

  return (
    <div>
        <Button variant='contained' onClick={() => {incrementaNumero(contatore); setContatoredue(contatoredue+1);} }>Incrementa</Button>
        <Button variant='contained' onClick={() => {decrementaNumero(contatore); setContatoredue(contatoredue-1);} }>Decrementa</Button>
        <p>Contatore in context = {contatore}</p>
        <p>Contatore locale = {contatoredue}</p>
        <p>Totale click effettuati =  {numeroClick}</p>
        <p>output memo =  {valuesMemo}</p>
        <p>output callback =  {valuesCall}</p>
        <p>output useref =  {ur.current}</p>



        <hr/>
        {/* <Button variant='contained' onClick={() => naviga(contatore, navigate) }>Incrementa</Button> */}
    </div>
  )
}

export default Contatore