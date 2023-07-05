
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ArrayofString } from '../Types/Type';
const { v4: uuidv4 } = require('uuid');

const Expence = (props:ArrayofString) => {
  const [text,setText]=useState("")
  const [amount,setAmount]=useState("")
  const [income,setIncome]=useState(500);
  const [exp,setExp]=useState(0);

  const TotalAmount=(val:string)=>{
    const temp = Number(val.slice(1,val.length));
    setIncome(income=>income+temp)
  }
  const ExpAmount=(val:string)=>{
    const temp = Number(val.slice(1,val.length));
    setExp(exp=>exp+temp)
  }


  const handleSubmit=(event:FormEvent <HTMLFormElement>)=>{
    event.preventDefault();
    if(amount[0]==="+"||"-"){
      if(amount[0]=="+"){
        const newTransaction = {text: text, amount: amount,index:uuidv4(),isAdd:true}
        props.addTransaction(newTransaction)
        TotalAmount(amount)
      }else if(amount[0]=="-"){
        const newTransaction = {text: text, amount: amount,index:uuidv4(),isAdd:false}
        props.addTransaction(newTransaction)
        ExpAmount(amount)
      }
    }
  }
  const handleText=(event:ChangeEvent<HTMLInputElement>)=>{
    setText(event.target.value)
  }
  const handleAmount=(event:ChangeEvent<HTMLInputElement>)=>{
    setAmount(event.target.value)
  }




  return (
    <div className='wrapper'>
        <p className='watermark'>{`{ PMA16131 : 1.0 }`}</p>
        <h1 className='header'>Expense Tracker</h1>
        <h3>your balance</h3>
        <h1 style={{color:"#222"}}>${income-exp}.00</h1>
        <div className='box_wrapper'>
          <div className="left">
            <p style={{fontWeight:"bold"}}>Income</p>
            <h3 style={{color:"green"}}>${income}.00</h3>
          </div>
          <div className="right">
          <p style={{fontWeight:"bold"}}>Expense</p>
            <h3 style={{color:"rgb(193, 2, 2)"}}>${exp}.00</h3>
          </div>
        </div>
        <br />
          <h3>History</h3>
          <hr />
          <div className='boxs'>
            <p className='plus'><span>Fix Salarys</span><span>+500</span></p>
            {props.array.map((one)=>{
              console.log(one)
              return(
                <div key={one.index}>
                  <p style={{display:one.display}} className={`${one.isAdd?"truex":"falsex"}`}><span>{one.text}</span><span>{one.amount}</span></p>
                </div>
              )
            })}
          </div>
          <br />
          <h3>Add New Transaction</h3>
          <hr />
          <br />
          <p style={{fontWeight:"bold",fontSize:"1em"}}>Text</p>
          <form onSubmit={handleSubmit}>
            <input value={text} onChange={handleText} type="text" placeholder='Enter text...'/>
            <p className='comment'>Amout <br />(negative = expense, positive = Income)</p>
            <input value={amount} onChange={handleAmount} type="text" placeholder='Enter amount...'/>
            <div><button type='submit'>Add Transaction</button></div>
          </form>
    </div>
  )
}

export default Expence