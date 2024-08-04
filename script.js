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

function btn_AC() {
  array.length = 0;
  ArraySoma.length = 0;
  ArryaNum.length = 0;
  ArraySubtracao.length = 0;
  ArrayMulti.length = 0;
  ArrayDivisao.length = 0;
  ArrayPorcentagem.length = 0;
  ArrayParentese.length = 0;

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

  // ( )

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

    //Equação ArrayParentese
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

  //   PrimeiraPrecedencia();
  //   SegundaPrecedencia();
  //   FristParentese = i;
  //  } else if (ArryaNum[i] == ')') {
  //   SecondParentese = i;
  //  };
  // };

  // ArryaNum.splice(0, 2);

  PrimeiraPrecedencia(ArryaNum);

  SegundaPrecedencia(ArryaNum);

  ArryaNum.length = 0;
}

function PrimeiraPrecedencia(Array) {
  for (let i = 0; i <= Array.length; i++) {
    if (Array[i] == "x") {
      LogicaMulti(i);
    } else if (Array[i] == "÷") {
      LogicaDivisao(i);
    } else if (Array[i] == "%") {
      LogicaPorcentagem(i);
    }
  }
}

function SegundaPrecedencia(Array) {
  Array.forEach(function (value, index) {
    if (typeof value === "string") {
      if (value == "+") {
        LogicaSoma(index, Array);
      } else if (value == "-") {
        LogicaSubtracao(index);
      } else {
        // por enquanto
        txt_result.innerHTML = Array[0];
        array.length = 0;
        ArraySoma.length = 0;
        ArryaNum.length = 0;
        ArraySubtracao.length = 0;
        ArrayMulti.length = 0;
        ArrayDivisao.length = 0;
        ArrayPorcentagem.length = 0;
        ArrayParentese.length = 0;
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

function LogicaPorcentagem(index) {
  if (typeof ArryaNum[index - 1] == "number") {
    ArrayPorcentagem.push(Number(ArryaNum[index - 1]));
  }

  if (typeof ArryaNum[index + 1] == "number") {
    ArrayPorcentagem.push(Number(ArryaNum[index + 1]));
  }

  Porcentagem(index);
  IterarArrayNum();
}

function Porcentagem(index) {
  let counter = ArrayPorcentagem[0];
  counter /= 100;
  ArryaNum.splice(index - 1, 2);
  ArryaNum[index - 1] = counter;
  ArrayPorcentagem.length = 0;
}

function LogicaDivisao(index) {
  if (typeof ArryaNum[index - 1] == "number") {
    ArrayDivisao.push(Number(ArryaNum[index - 1]));
  }

  if (typeof ArryaNum[index + 1] == "number") {
    ArrayDivisao.push(Number(ArryaNum[index + 1]));
  }

  Divisao(index);
  IterarArrayNum();
}

function Divisao(index) {
  let counter = ArrayDivisao[0];
  for (let i = 1; i < ArrayDivisao.length; i++) {
    counter /= ArrayDivisao[i];
  }

  ArryaNum.splice(index - 1, 2);
  ArryaNum[index - 1] = counter;
  ArrayDivisao.length = 0;
}

function LogicaMulti(index) {
  if (typeof ArryaNum[index - 1] == "number") {
    ArrayMulti.push(Number(ArryaNum[index - 1]));
  }

  if (typeof ArryaNum[index + 1] == "number") {
    ArrayMulti.push(Number(ArryaNum[index + 1]));
  }

  Multi(index);
  IterarArrayNum();
}

function Multi(index) {
  let counter = ArrayMulti[0];
  for (let i = 1; i < ArrayMulti.length; i++) {
    counter *= ArrayMulti[i];
  }

  ArryaNum.splice(index - 1, 2);
  ArryaNum[index - 1] = counter;
  ArrayMulti.length = 0;
}

function LogicaSoma(index, Array) {
  if (typeof Array[index - 1] == "number") {
    ArraySoma.push(Number(Array[index - 1]));
  }

  if (typeof Array[index + 1] == "number") {
    ArraySoma.push(Number(Array[index + 1]));
  }

  Soma(Array);
  IterarArrayNum();
}

function Soma(Array) {
  let counter = ArraySoma[0];
  for (let i = 1; i < ArraySoma.length; i++) {
    counter += ArraySoma[i];
  }

  Array.splice(0, 2);
  Array[0] = counter;
  ArraySoma.length = 0;
}

function LogicaSubtracao(index) {
  if (typeof ArryaNum[index - 1] == "number") {
    ArraySubtracao.push(Number(ArryaNum[index - 1]));
  }

  if (typeof ArryaNum[index + 1] == "number") {
    ArraySubtracao.push(Number(ArryaNum[index + 1]));
  }

  Subtracao();
  IterarArrayNum();
}

function Subtracao() {
  let counter = ArraySubtracao[0];
  for (let i = 1; i < ArraySubtracao.length; i++) {
    counter -= ArraySubtracao[i];
  }

  ArryaNum.splice(0, 2);
  ArryaNum[0] = counter;
  ArraySubtracao.length = 0;
}

// ta colocando mais de um caractere por vez - testa colocar mais de um simbulo
