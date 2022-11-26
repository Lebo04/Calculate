let sum = "";
let view = document.getElementById("output1").value;
let operators = ["+", "-", ".", "*", "/"];

function addToSum(value) {
  document.getElementById("output1").value += value;

  switch (document.getElementById("dot").value) {
    case ".":
      document.getElementById("dot").disabled = true;
      break;
    default:
      document.getElementById("dot").disabled = false;
      break;
  }
  switch (document.getElementById("times").value) {
    case "*":
      document.getElementById("times").disabled = true;
      break;
    default:
      document.getElementById("times").disabled = false;
      break;
  }
  switch (document.getElementById("slash").value) {
    case "/":
      document.getElementById("slash").disabled = true;
      break;
    default:
      document.getElementById("slash").disabled = false;
      break;
  }
  switch (document.getElementById("minus").value) {
    case "-":
      document.getElementById("minus").disabled = true;
      break;
    default:
      document.getElementById("minus").disabled = false;
      break;
  }
  switch (document.getElementById("add").value) {
    case "+":
      document.getElementById("add").disabled = false;
      break;
    default:
      document.getElementById("add").disabled = true;
      break;
  }

 

  // for (i = 0; i < operators.length; i++) {
  //   if (view.endsWith(operators[i])) {
  //     view.replace(operators[i], operators[i]);
  //     return view;
  //   }
  // }
}


function evaluateSum() {
  let x = document.getElementById("output1").value;
  sum = eval(x);
  document.getElementById("output2").value = sum;

  if (sum === undefined) {
    document.getElementById("output2").value = " ";
  }
}

function clearSum() {
  document.getElementById("output1").value = " ";
  document.getElementById("output2").value = " ";
}

function del() {
  let view = document.getElementById("output1").value;
  display = view.slice(0, -1);
  document.getElementById("output1").value = display;
}


