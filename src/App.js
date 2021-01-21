import React, { useState } from 'react';
function App(){
  /* const [rightSide,setRightSide] = useState([0])
  const [leftSide, setLeftSide] = useState([0]) */
 /*  const [operator, setOperator] = useState('+') */
  const [result, setResult] = useState([0])
  
  const rightSide = [[0]]
  const leftSide = [[0]]
  /* for(let i=0; i<100; i++){
    rightSide.push(i)
    i++
    return rightSide
  } */

  
  const calculateNumber =()=>{

  }

  return <div>
    <select onChange={(e)=>calculateNumber(e)}>
     {rightSide.push((number)=>{
       for(let i=0; i<100; i++){
        number.push(i)
        i++
        return <option>{number}</option>
       }
     })}
      
    </select>

    <select>
      <option>+</option>
      <option>-</option>
      <option>*</option>
      <option>/</option>
    </select>
      
    <select onChange={(e)=>calculateNumber(e)}>
      <option>{leftSide}</option>
    </select>
    <div>=</div>
    <form>{result}</form>
  </div>
}

export default App;

//リアクティブ計算機


//必要なstate
  //結果を格納するresult

//三つのform(select系)と、=(ただの=)の作成
//select1
  //デフォルト値:0
  //optionで1~100のうち一つを選択
    //最初から1~100を配列として代入しておく
      //pushで配列の末尾に現在の値に1を足したものを追加し、それを100回繰り返す
      //上記をmapでoptionとして描画する

  
//select2
  //デフォルト値:+
　//optionで演算子全てのうち一つを選択

//select3
  //デフォルト値:0
  //optionで表示するが、数が多いのでwhile文とかで繰り返す

//onChangeでselect2で演算子が選ばれた瞬間演算し、結果をresultに格納