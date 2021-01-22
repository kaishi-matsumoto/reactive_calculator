import React, { useState } from 'react';
import styled from 'styled-components'
function App(){
 
  const [result, setResult] = useState([0])
  
  const rightSide = [...Array(100).keys()]
  const leftSide = [...Array(100).keys()]

  const calculateNumber =(e)=>{

    const rightNumber = parseFloat(e.currentTarget.right.value, 10)
    const leftNumber = parseFloat(e.currentTarget.left.value, 10)
    const operator = JSON.stringify(e.currentTarget.operator.value)
    
    if( operator ===  JSON.stringify("+")){
      setResult(rightNumber + leftNumber)
      console.log(result)
    }else if( operator ===  JSON.stringify("-")){
      setResult(rightNumber - leftNumber)
    }else if( operator ===  JSON.stringify("*")){
      setResult(rightNumber * leftNumber)
    }else if( operator ===  JSON.stringify("/")){
      setResult(rightNumber / leftNumber)
    }

    if(leftNumber === 0  &&  operator ===  JSON.stringify("/") && rightNumber !== 0){
      setResult('0で割っちゃダメ')
    }
    
  }

  return <Form  onChange={(e)=>calculateNumber(e)}>
    <select name='right'>
     {rightSide.map((number)=>{
        return <option>{number}</option>
     })}
    </select>

    <select name='operator'>
      <option>+</option>
      <option>-</option>
      <option>*</option>
      <option>/</option>
    </select>
      
    <select name='left'>
     {leftSide.map((number)=>{
        return <option>{number}</option>
     })}
      
    </select>

    <div>=</div>

    <form>{result}</form>
  </Form>
}

const Form = styled.form`
  float: left;
`

export default App;
