import React, { useState } from 'react';
import styled from 'styled-components'
function App(){
 
  const [result, setResult] = useState(0)
  const [rightNumber, setRightNumber] = useState(0)
  const [leftNumber, setLeftNumber] = useState(0)
  const [operator, setOperator] = useState('+')
  const [calculated, setCalculated] = useState(false)

  const rightSide = [...Array(100).keys()]
  const leftSide = [...Array(100).keys()]


  
  const calculateNumber =(e)=>{
    console.log(rightNumber)

    if(rightNumber === 0 && leftNumber === 0){
      setResult(0)
    }

    if( operator ===  "+" ){
      setResult(rightNumber + leftNumber)
     /*  console.log(result) */
    }else if( operator ===  "-"){
      setResult(rightNumber - leftNumber)
    }else if( operator ===  "*"){
      setResult(rightNumber * leftNumber)
    }else if( operator ===  "/"){
      setResult(rightNumber / leftNumber)
    }

    if(leftNumber === 0  &&  operator ===  "/" && rightNumber !== 0){
      setResult('0で割っちゃダメ')
    }
    
  }

  return <form onChange={(e)=>calculateNumber(e)}>
    <select onChange={(e)=>setRightNumber(parseFloat(e.currentTarget.value, 10))} name='right' value={rightNumber} >
      {console.log(rightNumber)}
      {rightSide.map((number,i)=>{
          return <option value={i}>{number}</option>
          
      })}
    </select>

    <select onChange={(e)=>setOperator(e.currentTarget.value)} name='operate' value={operator}>
 {/*      {console.log(operator)} */}
      <option value='+'>+</option>
      <option value='-'>-</option>
      <option value='*'>*</option>
      <option value='/'>/</option>
    </select>
      
    <select onChange={(e)=>setLeftNumber(parseFloat(e.currentTarget.value, 10))} name='left' value={leftNumber}>
    {/*   {console.log(leftNumber)} */}
      {leftSide.map((number,i)=>{
          return <option value={i}>{number}</option>
      })}
        
    </select>

    <div>=</div>

    <form value={result}>{result}</form>
  </form>
}
/* 
const Form = styled.form`
  float: left;
` */

export default App;


//Appコンポーネント
  //state定義
    //rightSide:初期値1~100の数字
    //leftSide:初期値1~100の数字
    //result:初期値空の配列

  //calculateNumber
    //初期値同志
  //end
  
  //render開始
    //selectを選択→onChangeで選んだ値を格納

    //onChangeで格納された値をcalculateNumberで計算し、resultを更新
    

  //end
//export

