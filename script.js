var count;
var parenteseIs = "open";
var num = "";
var NumParentese = 0;
var InitParentese = "";
var EndParentese;

var array = [];
var ArryaNum = [];
var ArrayMulti = [];
var ArraySubtracao = [];
var ArraySoma = [];
var ArrayDivisao = [];
var ArrayPorcentagem = [];
var ArrayParentese = [];

var txt_num = document.getElementById("count");
var txt_result = document.getElementById("result");

function ArrayCleaner() {
  array.length = 0;
  ArraySoma.length = 0;
  ArryaNum.length = 0;
  ArraySubtracao.length = 0;
  ArrayMulti.length = 0;
  ArrayDivisao.length = 0;
  ArrayPorcentagem.length = 0;
  ArrayParentese.length = 0;
}

function btn_AC() {
  ArrayCleaner();
  txt_num.innerHTML = "";
  txt_result.innerHTML = "";
  NumParentese = 0;
}

function btn_parentesis() {
  if (array.length == 0) {
    array.push("(");
    NumParentese += 1;
  } else if (
    parenteseIs == "open" &&
    typeof array[array.length - 1] === "string"
  ) {
    array.push("(");
    NumParentese += 1;
  } else if (typeof array[array.length - 1] !== "string") {
    array.push(")");
    NumParentese--;
    parenteseIs = "close";
  } else if (parenteseIs == "close") {
    if (NumParentese != 0) {
      array.push(")");
      NumParentese--;
    } else {
      // array.push('x');
      array.push("(");
      NumParentese += 1;
      parenteseIs = "open";
    }
  }

  percorreArray();
}

function btn_porcentagem() {
  if (
    (array.length > 0 && typeof array[array.length - 1] === "number") ||
    array[array.length - 1] === ")"
  ) {
    array.push("%");
  } else if (typeof array[array.length - 1] === "string") {
    array[array.length - 1] = "%";
  }

  percorreArray();
}

function btn_divisao() {
  if (
    (array.length > 0 && typeof array[array.length - 1] === "number") ||
    array[array.length - 1] === ")"
  ) {
    array.push("÷");
  } else if (typeof array[array.length - 1] === "string") {
    array[array.length - 1] = "÷";
  }

  percorreArray();
}

function btn_multiplicacao() {
  if (
    (array.length > 0 && typeof array[array.length - 1] === "number") ||
    array[array.length - 1] === "%" ||
    array[array.length - 1] === ")"
  ) {
    array.push("x");
  } else if (typeof array[array.length - 1] === "string") {
    array[array.length - 1] = "x";
  }

  percorreArray();
}

function btn_subtracao() {
  if (
    (array.length > 0 && typeof array[array.length - 1] === "number") ||
    array[array.length - 1] === ")"
  ) {
    array.push("-");
  } else if (typeof array[array.length - 1] === "string") {
    array[array.length - 1] = "-";
  }

  percorreArray();
}

function btn_soma() {
  if (
    (array.length > 0 && typeof array[array.length - 1] === "number") ||
    array[array.length - 1] === ")"
  ) {
    array.push("+");
  } else if (typeof array[array.length - 1] === "string") {
    array[array.length - 1] = "+";
  }
  percorreArray();
}

function btn_ponto() {
  if (array.length > 0 && typeof array[array.length - 1] === "number") {
    array.push(".");
  } else if (typeof array[array.length - 1] === "string") {
    array[array.length - 1] = ".";
  }
  percorreArray();
}

function btn_0() {
  array.push(0);
  percorreArray();
}

function btn_1() {
  array.push(1);
  percorreArray();
}

function btn_2() {
  array.push(2);
  percorreArray();
}

function btn_3() {
  array.push(3);
  percorreArray();
}

function btn_4() {
  array.push(4);
  percorreArray();
}

function btn_5() {
  array.push(5);
  percorreArray();
}

function btn_6() {
  array.push(6);
  percorreArray();
}

function btn_7() {
  array.push(7);
  percorreArray();
}

function btn_8() {
  array.push(8);
  percorreArray();
}

function btn_9() {
  array.push(9);
  percorreArray();
}

function btn_igual() {
  array.push("=");
  AgrupaNumeros();
  IterarArrayNum();
}

function percorreArray() {
  txt_num.innerHTML = "";
  array.forEach(function (caracter) {
    txt_num.innerHTML += caracter;
  });
}

function AgrupaNumeros() {
  array.forEach(function (caracter) {
    if (typeof caracter === "number") {
      if (num == "") {
        num = caracter.toString();
      } else {
        num += caracter.toString();
      }
    } else {
      if (num != "") {
        ArryaNum.push(Number(num));
        num = "";
      }
      ArryaNum.push(caracter);
    }
  });
  array.length = 0;
  console.log(ArryaNum);
}

function IterarArrayNum() {
  for (let i = 0; i < ArryaNum.length; i++) {
    if (ArryaNum[i] == ".") {
      UniNumeros(i);
    }
  }

  Parentese();

  PrimeiraPrecedencia(ArryaNum);

  SegundaPrecedencia(ArryaNum);

  ArryaNum.length = 0;
}

function Parentese() {
  for (let i = 0; i < ArryaNum.length; i++) {
    if (ArryaNum[i] == "(") {
      InitParentese = i;
    }
  }

  if (InitParentese !== "") {
    for (let x = InitParentese; x < ArryaNum.length; x++) {
      if (ArryaNum[x] == ")") {
        EndParentese = x;
      }
    }

    for (var j = InitParentese + 1; j <= EndParentese - 1; j++) {
      ArrayParentese.push(ArryaNum[j]);
    }

    ArryaNum.splice(InitParentese, EndParentese - InitParentese);
    console.log(ArrayParentese);

    EquacaoParentese();
  }
}

function EquacaoParentese() {
  for (
    let indexArrayParentese = 0;
    indexArrayParentese < ArrayParentese.length;
    indexArrayParentese++
  ) {
    if (typeof ArrayParentese[indexArrayParentese] === "string") {
      if (
        ArrayParentese[indexArrayParentese] == "x" ||
        ArrayParentese[indexArrayParentese] == "÷" ||
        ArrayParentese[indexArrayParentese] == "%"
      ) {
        PrimeiraPrecedencia(ArrayParentese);
      } else if (
        ArrayParentese[indexArrayParentese] == "+" ||
        ArrayParentese[indexArrayParentese] == "-"
      ) {
        SegundaPrecedencia(ArrayParentese);
      }
    }
  }
  console.log(ArrayParentese);
  console.log(ArryaNum);
  ArryaNum[InitParentese] = ArrayParentese[0];
  ArrayParentese.length = 0;
  console.log(ArryaNum);
}

function PrimeiraPrecedencia(array) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] == "x") {
      LogicaMulti(i, array);
    } else if (array[i] == "÷") {
      LogicaDivisao(i, array);
    } else if (array[i] == "%") {
      LogicaPorcentagem(i, array);
    }
  }
}

function SegundaPrecedencia(array) {
  array.forEach(function (value, index) {
    if (typeof value === "string") {
      if (value == "+") {
        LogicaSoma(index, array);
      } else if (value == "-") {
        LogicaSubtracao(index, array);
      } else {
        // por enquanto (mas funciona)
        txt_result.innerHTML = array[0];
        ArrayCleaner();
      }
    }
  });
}

function UniNumeros(index) {
  let PrevNum = ArryaNum[index - 1].toString();
  let NextNum = ArryaNum[index + 1].toString();
  NextNum = `${PrevNum}.${NextNum}`;
  ArryaNum.splice(index - 1, 2);
  ArryaNum[index - 1] = Number(NextNum);

  IterarArrayNum();
}

function LogicaPorcentagem(index, array) {
  if (typeof array[index - 1] == "number") {
    ArrayPorcentagem.push(Number(array[index - 1]));
  }

  if (typeof array[index + 1] == "number") {
    ArrayPorcentagem.push(Number(array[index + 1]));
  }

  Porcentagem(index, array);
  IterarArrayNum();
}

function Porcentagem(index, array) {
  let counter = ArrayPorcentagem[0];
  counter /= 100;
  array.splice(index - 1, 2);
  array[index - 1] = counter;
  ArrayPorcentagem.length = 0;
}

function LogicaDivisao(index, array) {
  if (typeof array[index - 1] == "number") {
    ArrayDivisao.push(Number(array[index - 1]));
  }

  if (typeof array[index + 1] == "number") {
    ArrayDivisao.push(Number(array[index + 1]));
  }

  Divisao(index, array);
  IterarArrayNum();
}

function Divisao(index, array) {
  let counter = ArrayDivisao[0];
  for (let i = 1; i < ArrayDivisao.length; i++) {
    counter /= ArrayDivisao[i];
  }

  array.splice(index - 1, 2);
  array[index - 1] = counter;
  ArrayDivisao.length = 0;
}

function LogicaMulti(index, array) {
  if (typeof array[index - 1] == "number") {
    ArrayMulti.push(Number(array[index - 1]));
  }

  if (typeof array[index + 1] == "number") {
    ArrayMulti.push(Number(array[index + 1]));
  }

  Multi(index, array);
  IterarArrayNum();
}

function Multi(index, array) {
  let counter = ArrayMulti[0];
  for (let i = 1; i < ArrayMulti.length; i++) {
    counter *= ArrayMulti[i];
  }

  array.splice(index - 1, 2);
  array[index - 1] = counter;
  ArrayMulti.length = 0;
}

function LogicaSoma(index, array) {
  if (typeof array[index - 1] == "number") {
    ArraySoma.push(Number(array[index - 1]));
  }

  if (typeof array[index + 1] == "number") {
    ArraySoma.push(Number(array[index + 1]));
  }

  Soma(array);
  IterarArrayNum();
}

function Soma(array) {
  let counter = ArraySoma[0];
  for (let i = 1; i < ArraySoma.length; i++) {
    counter += ArraySoma[i];
  }

  array.splice(0, 2);
  array[0] = counter;
  ArraySoma.length = 0;
}

function LogicaSubtracao(index, array) {
  if (typeof array[index - 1] == "number") {
    ArraySubtracao.push(Number(array[index - 1]));
  }

  if (typeof array[index + 1] == "number") {
    ArraySubtracao.push(Number(array[index + 1]));
  }

  Subtracao(array);
  IterarArrayNum();
}

function Subtracao(array) {
  let counter = ArraySubtracao[0];
  for (let i = 1; i < ArraySubtracao.length; i++) {
    counter -= ArraySubtracao[i];
  }

  array.splice(0, 2);
  array[0] = counter;
  ArraySubtracao.length = 0;
}

