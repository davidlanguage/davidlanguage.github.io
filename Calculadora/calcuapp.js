let num1 = 0
let num2 = 0
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let result = document.getElementById("sum-el")
let numselect1 = document.getElementById("num1-select")
let numselect2 = document.getElementById("num2-select")
let numrestart1 = document.getElementById("num1-restart")
let numrestart2 = document.getElementById("num2-restart")
let boolchange = true;
// Create four functions: add(), subtract(), divide(), multiply()
let num01 = document.getElementById("num0")
let num11 = document.getElementById("num1")
let num21 = document.getElementById("num2")
let num31 = document.getElementById("num3")
let num41 = document.getElementById("num4")
let num51 = document.getElementById("num5")
let num61 = document.getElementById("num6")
let num71 = document.getElementById("num7")
let num81 = document.getElementById("num8")
let num91 = document.getElementById("num9")

//

function addition() {

    result.textContent = "Sum: " + (Number(num1) + Number(num2));
}

function substraction() {
    result.textContent = "Sub: " + (Number(num1) - Number(num2));
}

function division() {
    result.textContent = "Div: " + (Number(num1) / Number(num2));
}

function multiplication() {
    result.textContent = "Mul: " + (Number(num1) * Number(num2));
}
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
function add0() {
    if (boolchange) {
        num1 = num1 + "0"
        document.getElementById("num1-el").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "0"
        document.getElementById("num2-el").textContent = num2;
    }
}

function add1() {
    if (boolchange) {
        num1 = num1 + "1"
        document.getElementById("num1-el").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "1"
        document.getElementById("num2-el").textContent = num2;
    }
}

function add2() {
    if (boolchange) {
        num1 = num1 + "2"
        document.getElementById("num1-el").textContent = num1;

    }
    if (!boolchange) {
        num2 = num2 + "2"
        document.getElementById("num2-el").textContent = num2;
    }
}

function add3() {
    if (boolchange) {
        num1 = num1 + "3"
        document.getElementById("num1-el").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "3"
        document.getElementById("num2-el").textContent = num2;
    }
}

function add4() {
    if (boolchange) {
        num1 = num1 + "4"
        document.getElementById("num1-el").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "4"
        document.getElementById("num2-el").textContent = num2;
    }
}

function add5() {
    if (boolchange) {
        num1 = num1 + "5"
        document.getElementById("num1-el").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "5"
        document.getElementById("num2-el").textContent = num2;
    }
}

function add6() {
    if (boolchange) {
        num1 = num1 + "6"
        document.getElementById("num1-el").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "6"
        document.getElementById("num2-el").textContent = num2;
    }
}

function add7() {
    if (boolchange) {
        num1 = num1 + "7"
        document.getElementById("num1-el").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "7"
        document.getElementById("num2-el").textContent = num2;
    }
}

function add8() {
    if (boolchange) {
        num1 = num1 + "8"
        document.getElementById("num1-el").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "8"
        document.getElementById("num2-el").textContent = num2;
    }
}

function add9() {
    if (boolchange) {
        num1 = num1 + "9"
        document.getElementById("num1-el").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "9"
        document.getElementById("num2-el").textContent = num2;
    }
}
//
function select1() {
    boolchange = true;
    numselect1.style.backgroundColor = "lightgreen"
    numselect2.style.backgroundColor = "wheat"
}

function select2() {
    boolchange = false;
    numselect1.style.backgroundColor = "wheat"
    numselect2.style.backgroundColor = "lightgreen"
}

function restart1() {
    num1 = 0;
    document.getElementById("num1-el").textContent = num1;

}

function restart2() {
    num2 = 0;
    document.getElementById("num2-el").textContent = num2;
}