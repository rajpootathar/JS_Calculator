var integer1 = 0;
var integer2 = 0;
var check1 = false;
var int1_check = false;
var int2_check = false;
var again_calculate = 0;
var again_operator = "";
var check2 = false;
var operator = "";
var result = 0;
function set(value) {
  //   integer2 = null;
  console.log(0);
  value = parseInt(value);
  console.log(typeof value);
  integer1 = parseFloat(integer1);
  //   value = parseInt(value);
  if (check2 == false) {
    integer1 = integer1 * 10;
    integer1 = integer1 + value;
    integer1 = parseFloat(integer1);
    // integer1 = integer1 + value;
    // integer1 = parseFloat(integer1);
    // integer1 = parseFloat(integer1);
    console.log(integer1);
    // console.log(typeof integer1);
    // console.log(value);
    document.getElementById("screen").innerHTML = integer1;
    int1_check = true;
  } else {
    integer2 = integer2 * 10;
    integer2 = integer2 + value;
    integer2 = parseFloat(integer2);
    // document.getElementById("screen").innerHTML = "u inserted operator first";
    console.log(integer2);
    document.getElementById("screen").innerHTML = integer2;
    check1 = true;
    int2_check = true;
  }
}
function opt(oprt) {
  if (int1_check == false && check2 == false) {
    document.getElementById("screen").innerHTML = "enter value first";
  } else if (operator != "" && check2 == false) {
    integer2 = 0;
    calculate();
    operator = oprt;
  } else if (operator != "") {
    calculate();
    operator = oprt;
  } else {
    operator = oprt;
    check2 = true;
  }
}

function calculate() {
  console.log("in calculate");
  console.log(integer1);
  console.log(integer2);
  console.log(operator);
  if (int1_check == true && int2_check == false && again_operator != "") {
    switch (again_operator) {
      case "+":
        result = integer1 + again_calculate;
        integer1 = result;
        document.getElementById("screen").innerHTML = result;
        break;
      case "-":
        result = integer1 - again_calculate;
        integer1 = result;
        document.getElementById("screen").innerHTML = result;
        break;
      case "/":
        result = integer1 / again_calculate;
        integer1 = result;
        document.getElementById("screen").innerHTML = result;
        break;
      case "*":
        result = integer1 * again_calculate;
        integer1 = result;
        document.getElementById("screen").innerHTML = result;
        break;
    }
  } else {
    switch (operator) {
      case "+":
        if (int2_check == true) {
          result = integer1 + integer2;
          again_calculate = integer2;
          integer2 = 0;
          again_operator = operator;
          operator = "";
          int2_check = false;
          integer1 = result;
          document.getElementById("screen").innerHTML = result;
          break;
        } else if (int2_check == false) {
          console.log("agya");
          result = integer1 + again_calculate;
          integer1 = result;
          document.getElementById("screen").innerHTML = result;
          break;
        }
      case "-":
        result = integer1 - integer2;
        again_calculate = integer2;
        integer2 = 0;
        again_operator = operator;
        operator = "";
        int2_check = false;
        integer1 = result;
        document.getElementById("screen").innerHTML = result;

        break;
      case "*":
        if (check1 == false) {
          document.getElementById("screen").innerHTML = integer1;
          break;
        }
        //   result = integer1 * integer2;
        //   if (isFinite(result) == Infinity && check2 == false) {
        //     document.getElementById("screen").innerHTML = "your result is infinty";
        //     break;
        //   } else {
        //     integer2 = 0;
        //     operator = "";
        //     integer1 = result;
        //     document.getElementById("screen").innerHTML = result;
        //     break;
        // }
        else {
          result = integer1 * integer2;
          again_calculate = integer2;
          integer2 = 0;
          again_operator = operator;
          operator = "";
          int2_check = false;
          integer1 = result;
          document.getElementById("screen").innerHTML = result;
          break;
        }
      case "/":
        if (check1 == false) {
          document.getElementById("screen").innerHTML = integer1;
          break;
        } else {
          result = integer1 / integer2;
          if (result == Infinity) {
            //   console.log("phnch");
            document.getElementById("screen").innerHTML =
              "you tried to divide by zero";
            break;
          } else {
            again_calculate = integer2;
            integer2 = 0;
            again_operator = operator;
            operator = "";
            int2_check = false;
            integer1 = result;
            document.getElementById("screen").innerHTML = result;
            break;
          }
        }
    }
  }

  //   integer1 = result;
}
function remove() {
  integer1 = 0;
  integer2 = 0;
  check1 = false;
  check2 = false;
  int2_check = false;
  int1_check = false;
  again_operator = "";
  again_calculate = 0;
  operator = "";
  result = 0;
  document.getElementById("screen").innerHTML = "";
}
