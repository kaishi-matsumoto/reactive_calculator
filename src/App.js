import React, { useState } from 'react';
import styled from 'styled-components'
function App(){
 
  
  const [rightNumber, setRightNumber] = useState(0)
  const [leftNumber, setLeftNumber] = useState(0)
  const [operator, setOperator] = useState('+')
  
  const rightSide = [...Array(100).keys()]
  const leftSide = [...Array(100).keys()]

  const addition = operator ===  "+" ? rightNumber + leftNumber : undefined
  const subtraction = operator ===  "-" ? rightNumber - leftNumber : undefined
  const multiplication = operator ===  "*" ? rightNumber * leftNumber : undefined
  const division = operator ===  "/" && leftNumber !== 0 ? rightNumber / leftNumber : undefined
  const infinity = leftNumber === 0  &&  operator ===  "/" && rightNumber !== 0 ? '0で割っちゃダメ' : undefined

  return <React.Fragment>
    <form >
      <select onChange={(e)=>setRightNumber(parseFloat(e.currentTarget.value, 10))}  value={rightNumber} >
        {rightSide.map((number,i)=>{
            return <option value={i}>{number}</option>
        })}
      </select>

      <select onChange={(e)=>setOperator(e.currentTarget.value)} value={operator}>
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='*'>*</option>
        <option value='/'>/</option>
      </select>
        
      <select onChange={(e)=>setLeftNumber(parseFloat(e.currentTarget.value, 10))} value={leftNumber}>
        {leftSide.map((number,i)=>{
            return <option value={i}>{number}</option>
        })}
          
      </select>

      <div>=</div>

      {addition && <p>{addition}</p>}
      {subtraction && <p>{subtraction}</p> }
      {multiplication && <p>{multiplication}</p>}
      {division && <p>{division}</p>}
      {infinity && <p>{infinity}</p>}
     </form>

  </React.Fragment>
}


export default App;
