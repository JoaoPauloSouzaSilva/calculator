var count;
var array = [];
var txt_num = document.getElementById('count');
var txt_result = document.getElementById('result');

function btn_AC (){
  array.length = 0;
  ArraySoma.length = 0;
  ArryaNum.length = 0;
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

  console.log(ArryaNum);
  ArryaNum.forEach(function(value) {
    if(typeof value === 'string'){
      if (value != '=') {        
        var i = ArryaNum.indexOf(value);
        ArraySoma.push(Number(ArryaNum[i - 1]));
        ArraySoma.push(Number(ArryaNum[i + 1]));
      };
    };
  });

  ArryaNum.length = 0;
  Soma();

}; 

var ArraySoma = [];
function Soma() {
  var counter = 0;
  for (let i = 0; i < ArraySoma.length; i++) {
    counter += ArraySoma[i];
  };
  txt_result.innerHTML = counter;
  ArraySoma.length = 0;
};

function percorreArray(){
    txt_num.innerHTML = '';
    array.forEach(function(caracter){
      txt_num.innerHTML += caracter;
    });
};