// ("use strict");
class StackNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}
class Stack {
  constructor() {
    this.root = null; // корневое значение - стек пуст
    this.countElement = 0; //количество элементов в стеке
  }
  isEmpty() {
    return this.countElement === 0; // проверка состояния стека (true если пустой)
  }
  size() {
    return this.countElement; // количество элементов в стеке
  }
  push(value) {
    // добавление элемента в стек
    let oldFirst = this.root; // запоминаем верхнее значение
    this.root = new StackNode(value); // помещаем на верх стека новое значение
    this.root.prev = oldFirst; // значение под верхним элементом (предыдущее)
    this.countElement++; // увеличиваем счетчик стека
  }
  pop() {
    // извлечение элемента из стека
    if (this.isEmpty) return null; // проверяем, если стек пуст - возвращаем null
    let oldFirst = this.root; //	запоминаем верхнее значение
    this.root = oldFirst.prev; // указатель текущего значения стека смещаем на пред. число
    this.countElement--; // уменьшаем счетчик стека
    return oldFirst.value; // возвращаем изьятое из стека значение
  }
}

let total = document.querySelector("#result"),
  formula = document.querySelector(".final-result").value,
  minus = false;
//функция ввода и формирование строки выражения -> formula
function input(i) {
  formula += i;
  output(formula);
}
//ограничение вывода на экран не более 12 символов
function output(exp) {
  total.innerHTML = exp;
  if (total.innerHTML.length > 12) {
    total.innerHTML = total.innerHTML.slice(total.innerHTML.length - 12);
  }
}
//вычисление выражения
function result() {
  total.innerHTML = eval(formula).toFixed(2);
  if (total.innerHTML.length > 12) {
    total.innerHTML = "overflow";
  }
  if (total.innerHTML == Infinity) {
    total.innerHTML = "error";
  }
}
//изменение знака выражения
function znak() {
  if (formula[0] !== "-") {
    formula = "-" + formula;
    output(formula);
    minus = true;
  } else {
    formula = formula.slice(1);
    output(formula);
    minus = false;
  }
}
//стирание последнего символа
function backspace() {
  formula = formula.substring(0, formula.length - 1);
  output(formula);
  if (formula.length == 0) {
    reset();
  }
}
//сброс на 0
function reset() {
  formula = "";
  total.innerHTML = 0;
  minus = false;
}

//Поддержка ввода чисел и знаков с клавиатуры
document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "1":
      input("1");
      break;
    case "2":
      input("2");
      break;
    case "3":
      input("3");
      break;
    case "4":
      input("4");
      break;
    case "5":
      input("5");
      break;
    case "6":
      input("6");
      break;
    case "7":
      input("7");
      break;
    case "8":
      input("8");
      break;
    case "9":
      input("9");
      break;
    case "0":
      input("0");
      break;
    case "+":
      input("+");
      break;
    case "=":
      result();
      break;
    case "/":
      input("/");
      break;
    case "-":
      input("-");
      break;
    case "*":
      input("*");
      break;
    case ".":
      input(".");
      break;
    case "(":
      input("(");
      break;
    case ")":
      input(")");
      break;
    case "^":
      input("**");
      break;
    case "%":
      input("%");
      break;
    case "Escape":
      reset();
      break;
    case "Backspace":
      backspace();
      break;
  }
  if (event.code == "Enter" || event.code == "NumpadEnter") {
    result();
  }
});
let stackNumber = new Stack(),
  stackOper = new Stack(),
  char = "";

function Parser(formula) {}

stackNumber.push(1);

stackOper.push("(");

console.log(stackNumber);

console.log(stackOper);