let sum = "";
let operator = document.getElementById("operator").value;

function clearSum() {
  document.getElementById("output1").value = " ";
  document.getElementById("output2").value = " ";
}

function addToSum(value) {
  document.getElementById("output1").value += value;

  switch (operator) {
    case "/":
      document.getElementById("operator").disabled = true;
      break;
    case "-":
      document.getElementById("operator").disabled = true;
      break;
    case "+":
      document.getElementById("operator").disabled = true;
      break;
    case "*":
      document.getElementById("operator").disabled = true;
      break;
    case ".":
      document.getElementById("operator").disabled = true;
      break;

    default:
      document.getElementById("operator").disabled = false;
      break;
  }
}

function evaluateSum() {
  let x = document.getElementById("output1").value;
  sum = eval(x);
  document.getElementById("output2").value = sum;
}

function del() {
  let view = document.getElementById("output1").value;
  display = view.slice(0, -1);
  document.getElementById("output1").value = display;
}
