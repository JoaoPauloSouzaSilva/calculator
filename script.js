var count;
var array = [];
var txt_num = document.getElementById('count');
var txt_result = document.getElementById('result');

function btn_AC (){
  array.length = 0;
  ArraySoma.length = 0;
  ArryaNum.length = 0;
  ArrayTemp.length = 0;
  ArraySubtracao.length = 0;
  txt_num.innerHTML = '';
  txt_result.innerHTML = '';
};

var parenteseIs = true;

function btn_parentesis (){ 
  if(parenteseIs ){
    array.push('(');
    parenteseIs = false;
  }else{
    array.push(')');
    parenteseIs = true;
  };
  percorreArray();
};

function btn_porcentagem (){
  if(array.length > 0 && typeof array[array.length - 1] === 'number'){
    array.push('%');
  };
  percorreArray();
};

function btn_divisao (){
  if(array.length > 0 && typeof array[array.length - 1] === 'number'){
    array.push('÷');
  };
  percorreArray();
};

function btn_multiplicacao (){
  if(array.length > 0 && typeof array[array.length - 1] === 'number'){
    array.push('x');
  };
  percorreArray();
};

function btn_subtracao (){
  if(array.length > 0 && typeof array[array.length - 1] === 'number'){
    array.push('-');
  };
  percorreArray();
};

function btn_soma (){
  if(array.length > 0 && typeof array[array.length - 1] === 'number'){
    array.push('+');
  };
  percorreArray();
};

function btn_virgula (){
  if(array.length > 0 && typeof array[array.length - 1] === 'number'){
    array.push(',');
  };
  percorreArray();
};

function btn_0 (){
  array.push(0);
  percorreArray();
};

function btn_1 (){
  array.push(1);
  percorreArray();
};

function btn_2 (){
  array.push(2);
  percorreArray();
};

function btn_3 (){
  array.push(3);
  percorreArray();
};

function btn_4 (){
  array.push(4);
  percorreArray();
};

function btn_5 (){
  array.push(5);
  percorreArray();
};

function btn_6 (){
  array.push(6);
  percorreArray();
};

function btn_7 (){
  array.push(7);
  percorreArray();
};

function btn_8 (){
  array.push(8);
  percorreArray();
};

function btn_9 (){
  array.push(9);
  percorreArray();
};

var num = ''; 
var ArryaNum = [];

function btn_igual(){
  array.push('=');
  array.forEach(function(caracter){
    if(typeof caracter === 'number'){
      if (num == '') {
        num = caracter.toString();
      }else{
        num += caracter.toString();
      };       
    } else{
        ArryaNum.push(Number(num));
        num = '';
        ArryaNum.push(caracter);
    };
  });

  array.length = 0;

  ArryaNum.forEach(function(value, index) {
    if(typeof value === 'string'){
      if (value == '+') {
        if (index == 1) {
          if (typeof ArryaNum[index - 1] == 'number') {          
            ArraySoma.push(Number(ArryaNum[index - 1]));
          };
  
          if (typeof ArryaNum[index + 1] == 'number') {          
            ArraySoma.push(Number(ArryaNum[index + 1]));
          };
          
          Soma(index);
          
        }else{
          if (typeof ArryaNum[index + 1] == 'number') {          
            ArraySoma.push(Number(ArryaNum[index + 1]));
          };
          Soma(index);
        };

      }else if (value == '-') {
        if (index == 1) {
          if (typeof ArryaNum[index - 1] == 'number') {          
            ArraySubtracao.push(Number(ArryaNum[index - 1]));
          };
          
  
          if (typeof ArryaNum[index + 1] == 'number') {          
            ArraySubtracao.push(Number(ArryaNum[index + 1]));
          };
          
          
          Subtracao(index);
          
        }else{
          if (typeof ArryaNum[index + 1] == 'number') {          
            ArraySubtracao.push(Number(ArryaNum[index + 1]));
          };
          Subtracao(index);
        };
        
      }else if (value == '=') {
        txt_result.innerHTML = ArrayTemp[0];
        ArrayTemp.length = 0;
        ArraySubtracao.length = 0;
      };

        //se não for um número
    };
  });

  ArryaNum.length = 0;
};

var ArrayTemp = [];

var ArraySubtracao = [];
function Subtracao(IndexArrayNum) {
  let counter = 0;
  if (IndexArrayNum == 1) {
    counter = ArraySubtracao[0]
    for (let i = 1; i < ArraySubtracao.length; i++) {
      counter -= ArraySubtracao[i];
    };
    ArrayTemp.push(counter);
    ArraySubtracao.length = 0;

  } else{
    counter = ArrayTemp[0];
    ArrayTemp.length = 0;
    counter -= ArraySubtracao[0];
    ArraySubtracao.length = 0;
    ArrayTemp.push(counter);
  };
};

var ArraySoma = [];
function Soma(IndexArrayNum) {
  let counter = 0;
  if (IndexArrayNum == 1) {
    for (let i = 0; i < ArraySoma.length; i++) {
      counter += ArraySoma[i];
    };
    ArrayTemp.push(counter);
    ArraySoma.length = 0;

  } else{
    counter += ArrayTemp[0];
    ArrayTemp.length = 0;
    counter += ArraySoma[0];
    ArraySoma.length = 0;
    ArrayTemp.push(counter);
  };
};

function percorreArray(){
    txt_num.innerHTML = '';
    array.forEach(function(caracter){
      txt_num.innerHTML += caracter;
    });
};