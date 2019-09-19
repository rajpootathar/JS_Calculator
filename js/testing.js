var integer1 = 0;
var integer2 = 0;
var check1 = false;
var int1_check = false;
var int2_check = false;
var again_calculate = 0;
var again_operator = "";
var check2 = false;
var dot_check1 = false;
var dot_check2 = false;
var dot_int1 = 0;
var dot_int2 = 0;
var int1_neg = false;
var int2_neg = false;
var operator = "";
var check_screen = 100000000;
var int1_dot_divide = 10;
var int2_dot_divide = 10;
var result = 0;
var results = [];

function set(value) {
  //   integer2 = null;
  // console.log(0);

  value = parseFloat(value);
  console.log(typeof value);
  integer1 = parseFloat(integer1);
  //   value = parseInt(value);
  if (check2 == false) {
    var check = integer1 / check_screen;
    if (check <= 9) {
      if (dot_check1 == true) {
        dot_int1 = value / int1_dot_divide;
        if (int1_neg === true) {
          console.log("there");
          integer1 = integer1 - dot_int1;
        } else {
          integer1 = integer1 + dot_int1;
        }
        int1_dot_divide = int1_dot_divide * 10;
        document.getElementById("screen").append(value);
        console.log(integer1);
        int1_check = true;
      } else {
        integer1 = integer1 * 10;
        if (int1_neg === true) {
          integer1 = integer1 - value;
        } else {
          integer1 = integer1 + value;
        }

        integer1 = parseFloat(integer1);
        // integer1 = integer1 + value;
        // integer1 = parseFloat(integer1);
        // integer1 = parseFloat(integer1);
        console.log(integer1);
        // console.log(typeof integer1);
        // console.log(value);
        document.getElementById("screen").innerHTML = integer1;
        int1_check = true;
      }
    } else {
      document.getElementById("screen").innerHTML = integer1;
    }
  } else {
    var check = integer1 / check_screen;
    if (check <= 9) {
      if (dot_check2 == true) {
        dot_int2 = value / 10;
        if (int2_neg === true) {
          integer2 = integer2 - dot_int2;
        } else {
          integer2 = integer2 + dot_int2;
        }

        document.getElementById("screen").innerHTML = integer2;
        int2_check = true;
      } else {
        integer2 = integer2 * 10;
        if (int2_neg === true) {
          integer2 = integer2 - value;
        } else {
          integer2 = integer2 + value;
        }

        integer2 = parseFloat(integer2);
        // document.getElementById("screen").innerHTML = "u inserted operator first";
        console.log(integer2);
        document.getElementById("screen").innerHTML = integer2;
        check1 = true;
        int2_check = true;
      }
    } else {
      document.getElementById("screen").innerHTML = integer2;
    }
  }
}
function opt(oprt) {
  if (int1_check === false && check === false) {
    document.getElementById("screen").innerHTML = "enter value first";
  } else if (operator != "" && check2 == false) {
    // integer2 = 0;
    // calculate();
    operator = oprt;
  } else if (int1_check === true && int2_check === true && operator !== "") {
    calculate();
    operator = oprt;
  } else {
    if (oprt === "%") {
      operator = oprt;
      check2 = true;
      // console.log("in oper");
      calculate();
    } else {
      console.log("in oper");
      operator = oprt;
      check2 = true;
    }
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
        // console.log("lo g");
        result = integer1 + again_calculate;
        results.push(result);
        integer1 = result;
        document.getElementById("screen").innerHTML = result;
        break;
      case "-":
        result = integer1 - again_calculate;
        results.push(result);

        integer1 = result;
        document.getElementById("screen").innerHTML = result;
        break;
      case "/":
        result = integer1 / again_calculate;
        results.push(result);

        integer1 = result;
        document.getElementById("screen").innerHTML = result;
        break;
      case "*":
        result = integer1 * again_calculate;
        results.push(result);

        integer1 = result;
        document.getElementById("screen").innerHTML = result;
        break;
      case "%":
        result = integer1 / 100;
        results.push(result);

        integer1 = result;
        document.getElementById("screen").innerHTML = result;
        break;
    }
  } else if (int2_check === false && operator !== "") {
    console.log(operator);
    switch (operator) {
      case "+":
        // console.log("m there");
        // integer1 = parseFloat(integer1);
        result = 0;
        result = integer1 + integer1;
        results.push(result);
        again_calculate = integer1;
        integer1 = result;
        again_operator = operator;
        document.getElementById("screen").innerHTML = result;
        break;
      case "-":
        result = integer1 - integer1;
        results.push(result);
        again_calculate = integer1;
        integer1 = result;
        again_operator = operator;
        document.getElementById("screen").innerHTML = result;
        break;
      case "*":
        // console.log("in *****");
        result = 0;
        result = integer1 * integer1;

        console.log(result);
        results.push(result);
        again_calculate = integer1;
        integer1 = result;
        again_operator = operator;
        operator = "";
        document.getElementById("screen").innerHTML = result;
        // document.getElementById("screen").innerHTML = integer1;
        break;
      case "/":
        result = integer1 / integer1;
        results.push(result);
        again_calculate = integer1;
        integer1 = result;
        again_operator = operator;
        document.getElementById("screen").innerHTML = result;
        break;
      case "%":
        result = integer1 / 100;
        results.push(result);
        again_calculate = integer1;
        integer1 = result;
        again_operator = operator;
        document.getElementById("screen").innerHTML = result;
        break;
    }
  } else {
    switch (operator) {
      case "+":
        // console.log("andar");
        // if (int2_check == true) {
        result = integer1 + integer2;
        results.push(result);

        again_calculate = integer2;
        integer2 = 0;
        again_operator = operator;
        operator = "";
        int2_check = false;
        integer1 = result;
        document.getElementById("screen").innerHTML = result;
        break;
      // } else if (int2_check == false) {
      //   console.log("agya");
      //   result = integer1 + again_calculate;
      //   integer1 = result;
      //   document.getElementById("screen").innerHTML = result;
      //   break;
      // }
      case "-":
        result = integer1 - integer2;
        results.push(result);

        again_calculate = integer2;
        integer2 = 0;
        again_operator = operator;
        operator = "";
        int2_check = false;
        integer1 = result;
        document.getElementById("screen").innerHTML = result;

        break;
      case "%":
        console.log("andar");
        result = integer1 / 100;
        results.push(result);

        // again_calculate = integer2;
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
          results.push(result);

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
            results.push(result);

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
  dot_check1 = false;
  dot_check2 = false;
  int1_neg = false;
  int2_neg = false;
  dot_int1 = 0;
  dot_int2 = 0;
  again_operator = "";
  int1_dot_divide = 10;
  int2_dot_divide = 10;
  again_calculate = 0;
  operator = "";
  result = 0;
  results = [];
  document.getElementById("case1").style.backgroundColor = "rgb(248, 180, 53)";
  document.getElementById("case1").style.color = "white";
  document.getElementById("case2").style.backgroundColor = "rgb(248, 180, 53)";
  document.getElementById("case2").style.color = "white";
  document.getElementById("case3").style.backgroundColor = "rgb(248, 180, 53)";
  document.getElementById("case3").style.color = "white";
  document.getElementById("case4").style.backgroundColor = "rgb(248, 180, 53)";
  document.getElementById("case4").style.color = "white";

  document.getElementById("screen").innerHTML = "";
}
function changeColor(_this, case1, case2, case3) {
  _this.style.backgroundColor = "white";
  _this.style.color = "rgb(248, 180, 53)";

  document.getElementById(case1).style.backgroundColor = "rgb(248, 180, 53)";
  document.getElementById(case1).style.color = "white";

  document.getElementById(case2).style.backgroundColor = "rgb(248, 180, 53)";
  document.getElementById(case2).style.color = "white";

  document.getElementById(case3).style.backgroundColor = "rgb(248, 180, 53)";
  document.getElementById(case3).style.color = "white";
}

function sign() {
  if (int1_check === true && int2_check === false) {
    int1_neg = !int1_neg;
    integer1 = integer1 * -1;
    document.getElementById("screen").innerHTML = integer1;
  } else {
    // integer1 = integer1 * -1;
    int2_neg = !int2_neg;
    integer2 = integer2 * -1;
    document.getElementById("screen").innerHTML = integer2;
  }
}

function dot() {
  if (dot_check1 === false && int2_check === false) {
    dot_check1 = true;
    console.log("in dot 1");
    document.getElementById("screen").innerHTML = integer1 + ".";
  } else if (dot_check2 == false && int2_check === true) {
    dot_check2 = true;
    console.log("in dot 2");
    document.getElementById("screen").innerHTML = integer2 + ".";
  }
  // else {
  //   document.getElementById("screen").innerHTML = "no double dots allowed";
  // }

  // integer1 = String(integer1);
  // integer1 = integer1 + ".0";
  // console.log(integer1);
  // console.log(typeof integer1);
  // integer1 = parseFloat(integer1);
  // console.log(integer1);
  // console.log(typeof integer1);
}

function storage() {
  document.getElementById("screen").innerHTML = results;
}
