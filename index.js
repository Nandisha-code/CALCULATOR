let display = document.getElementById("display");

function append(value) {
  if (display.value === "0") display.value = "";
  if (value === "π") {
    display.value += Math.PI;
  } else if (value === "e") {
    display.value += Math.E;
  } else if (value === "√(") {
    display.value += "Math.sqrt(";
  } else if (value === "sin(" || value === "cos(" || value === "tan(" || value === "log(" || value === "ln(") {
    let func = {
      "sin(": "Math.sin(",
      "cos(": "Math.cos(",
      "tan(": "Math.tan(",
      "log(": "Math.log10(",
      "ln(": "Math.log("
    };
    display.value += func[value];
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "0";
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}
