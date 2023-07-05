import { useState } from 'react';
import './App.css';
import Expence from './Components/Expense';
import { NewObject } from './Types/Type';

const arr = [{text:"",amount:"",index:1,isAdd:false,display:"none"}];


function App() {
  const [array,setArray]=useState(arr)
  const addTransaction=(newObj:NewObject)=>{
    setArray((prev)=>[...prev,newObj])
  }
  return (
    <>
    {arr && <Expence addTransaction={addTransaction} array={array}/>}
    </>
  );
}

export default App;
