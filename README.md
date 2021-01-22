//リアクティブ計算機

//useStateのインポート
//Appコンポーネント

  //必要なstate定義
    //結果を格納するresult
      //デフォルト値:[0]

  //必要な変数定義
    //rightSide:最初から1~100を配列として代入しておく 
    //leftSide:最初から1~100を配列として代入しておく 


  //selectで選択した時に発動する関数checkValue
    //各select内のoptionの値を拾う

    //if 演算子が/で、select3が0だったら
      //「0で割らないでください」でresultを更新
      //else if それ以外の普通の演算だったら
        //select1とselect3をselect2の演算子で計算し、resultの値を更新      
    //end
    

  //render開始 
    //select1
      //デフォルト値:0
      //optionで1~100のうち一つを選択
          //上記をmapでoptionとして描画する
      
    //select2
      //デフォルト値:+
    　//optionで演算子全てのうち一つを選択

    //select3
      //デフォルト値:0
      //デフォルト値:0
      //optionで1~100のうち一つを選択
          //上記をmapでoptionとして描画する

    //selectごとにonChange設定

    //result
      
      //checkValueにてsetState
       
  //render終了

//Appコンポーネント終了



