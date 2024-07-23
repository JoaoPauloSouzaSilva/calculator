var count;
var parenteseIs = true;
var num = "";

var array = [];
var ArryaNum = [];
var ArrayMulti = [];
var ArraySubtracao = [];
var ArraySoma = [];

var txt_num = document.getElementById("count");
var txt_result = document.getElementById("result");

function btn_AC() {
  array.length = 0;
  ArraySoma.length = 0;
  ArryaNum.length = 0;
  ArraySubtracao.length = 0;
  ArrayMulti.length = 0;
  txt_num.innerHTML = "";
  txt_result.innerHTML = "";
}

function btn_parentesis() {
  if (parenteseIs) {
    array.push("(");
    parenteseIs = false;
  } else {
    array.push(")");
    parenteseIs = true;
  }
  percorreArray();
}

function btn_porcentagem() {
  if (array.length > 0 && typeof array[array.length - 1] === "number") {
    array.push("%");
  }
  percorreArray();
}

function btn_divisao() {
  if (array.length > 0 && typeof array[array.length - 1] === "number") {
    array.push("÷");
  }
  percorreArray();
}

function btn_multiplicacao() {
  if (array.length > 0 && typeof array[array.length - 1] === "number") {
    array.push("x");
  }
  percorreArray();
}

function btn_subtracao() {
  if (array.length > 0 && typeof array[array.length - 1] === "number") {
    array.push("-");
  }
  percorreArray();
}

function btn_soma() {
  if (array.length > 0 && typeof array[array.length - 1] === "number") {
    array.push("+");
  }
  percorreArray();
}

function btn_virgula() {
  if (array.length > 0 && typeof array[array.length - 1] === "number") {
    array.push(",");
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

  // if (ArryaNum.indexOf("x") != -1) {
  //   if (typeof ArryaNum[ArryaNum.indexOf("x") - 1] == "number") {
  //     ArrayMulti.push(Number(ArryaNum[ArryaNum.indexOf("x") - 1]));
  //   }

  //   if (typeof ArryaNum[ArryaNum.indexOf("x") + 1] == "number") {
  //     ArrayMulti.push(Number(ArryaNum[ArryaNum.indexOf("x") + 1]));
  //   }

  //   Multi(ArryaNum.indexOf("x"));
  // };
};


function percorreArray() {
  txt_num.innerHTML = "";
  array.forEach(function (caracter) {
    txt_num.innerHTML += caracter;
  });
};

function AgrupaNumeros() {
  array.forEach(function (caracter) {
    if (typeof caracter === "number") {
      if (num == "") {
        num = caracter.toString();
      } else {
        num += caracter.toString();
      };
    } else {
      ArryaNum.push(Number(num));
      num = "";
      ArryaNum.push(caracter);
    };
  });
  array.length = 0;
};

function IterarArrayNum() {
  ArryaNum.forEach(function (value, index) {
    if (typeof value === "string") {
      if (value == "+") {
        LogicaSoma(index);
      } else if (value == "-") {
        LogicaSubtracao(index);
      } else {
        // por enquanto
        txt_result.innerHTML = ArryaNum[0];
        array.length = 0;
        ArraySoma.length = 0;
        ArryaNum.length = 0;
        ArraySubtracao.length = 0;
        ArrayMulti.length = 0;
      };
    };
  });
  ArryaNum.length = 0;
};

function Multi(IndexArrayNum) {
  let counter = ArrayMulti[0];
  for (let i = 1; i < ArrayMulti.length; i++) {
    counter *= ArrayMulti[i];
  }
  if (IndexArrayNum == 1) {
    ArryaNum.slice(0, 2);
    ArryaNum[0] = counter;
    ArrayMulti.length = 0;
  } else {
    ArryaNum.splice(IndexArrayNum - 1, 2);
    ArryaNum[IndexArrayNum - 1] = counter;
    ArrayMulti.length = 0;
  }
};

function LogicaSoma(index) {
  // if (ArryaNum.indexOf("+") == 1) {
  if (typeof ArryaNum[index - 1] == "number") {
    ArraySoma.push(Number(ArryaNum[index - 1]));
  }

  if (typeof ArryaNum[index + 1] == "number") {
    ArraySoma.push(Number(ArryaNum[index + 1]));
  }

  Soma();
  IterarArrayNum();

  // } else {
  //   if (typeof ArryaNum[ArryaNum.indexOf("+") + 1] == "number") {
  //     ArraySoma.push(Number(ArryaNum[ArryaNum.indexOf("+") + 1]));
  //   };
  //   Soma();
  // };
};

function Soma() {
  let counter = ArraySoma[0];
  console.log(ArraySoma);
  for (let i = 1; i < ArraySoma.length; i++) {
    counter += ArraySoma[i];
  }
  // if (IndexArrayNum == 1) {
  ArryaNum.splice(0, 2);
  ArryaNum[0] = counter;
  ArraySoma.length = 0;
  // } else {
  //   ArryaNum.splice(IndexArrayNum - 1, 2);
  //   ArryaNum[IndexArrayNum - 1] = counter;
  //   ArraySoma.length = 0;
  // };
}

function LogicaSubtracao(index) {
  // if (ArryaNum.indexOf("-") == 1) {
  if (typeof ArryaNum[index - 1] == "number") {
    ArraySubtracao.push(Number(ArryaNum[index - 1]));
  }

  if (typeof ArryaNum[index + 1] == "number") {
    ArraySubtracao.push(Number(ArryaNum[index + 1]));
  }

  Subtracao();
  IterarArrayNum();

  // } else {
  //   if (typeof ArryaNum[ArryaNum.indexOf("-") + 1] == "number") {
  //     ArraySubtracao.push(Number(ArryaNum[ArryaNum.indexOf("-") + 1]));
  //   };
  //   Subtracao(ArryaNum.indexOf("-"));
  // };
};

function Subtracao() {
  let counter = ArraySubtracao[0];
  for (let i = 1; i < ArraySubtracao.length; i++) {
    counter -= ArraySubtracao[i];
  }
  // if (IndexArrayNum == 1) {
  ArryaNum.splice(0, 2);
  ArryaNum[0] = counter;
  ArraySubtracao.length = 0;
  // } else {
  //   ArryaNum.splice(IndexArrayNum - 1, 2);
  //   ArryaNum[IndexArrayNum - 1] = counter;
  //   ArraySubtracao.length = 0;
  // };
}
