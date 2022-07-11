let num1 = 0
let num2 = 0
document.getElementById("screen").textContent = num1
document.getElementById("screen").textContent = num2
let result = document.getElementById("screen")
let numselect1 = document.getElementById("num1-select")
let numselect2 = document.getElementById("num2-select")
let boolchange = true;
let boolsum = false;
let boolsub = false;
let booldiv = false;
let boolmul = false;
// Create four functions: add(), subtract(), divide(), multiply()

//

function doit() {
    if (boolsum) {
        result.textContent = (Number(num1) + Number(num2));
        boolsum = false;
    }
    if (boolsub) {
        result.textContent = (Number(num1) - Number(num2));
        boolsub = false;
    }
    if (booldiv) {
        result.textContent = (Number(num1) / Number(num2));
        booldiv = false;
    }
    if (boolmul) {
        result.textContent = (Number(num1) * Number(num2));
        boolmul = false;
    }
    boolchange = true;
}
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
function add0() {
    if (boolchange) {
        num1 = num1 + "0"
        document.getElementById("screen").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "0"
        document.getElementById("screen").textContent = num2;
    }
}

function add1() {
    if (boolchange) {
        num1 = num1 + "1"
        document.getElementById("screen").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "1"
        document.getElementById("screen").textContent = num2;
    }
}

function add2() {
    if (boolchange) {
        num1 = num1 + "2"
        document.getElementById("screen").textContent = num1;

    }
    if (!boolchange) {
        num2 = num2 + "2"
        document.getElementById("screen").textContent = num2;
    }
}

function add3() {
    if (boolchange) {
        num1 = num1 + "3"
        document.getElementById("screen").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "3"
        document.getElementById("screen").textContent = num2;
    }
}

function add4() {
    if (boolchange) {
        num1 = num1 + "4"
        document.getElementById("screen").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "4"
        document.getElementById("screen").textContent = num2;
    }
}

function add5() {
    if (boolchange) {
        num1 = num1 + "5"
        document.getElementById("screen").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "5"
        document.getElementById("screen").textContent = num2;
    }
}

function add6() {
    if (boolchange) {
        num1 = num1 + "6"
        document.getElementById("screen").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "6"
        document.getElementById("screen").textContent = num2;
    }
}

function add7() {
    if (boolchange) {
        num1 = num1 + "7"
        document.getElementById("screen").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "7"
        document.getElementById("screen").textContent = num2;
    }
}

function add8() {
    if (boolchange) {
        num1 = num1 + "8"
        document.getElementById("screen").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "8"
        document.getElementById("screen").textContent = num2;
    }
}

function add9() {
    if (boolchange) {
        num1 = num1 + "9"
        document.getElementById("screen").textContent = num1;
    }
    if (!boolchange) {
        num2 = num2 + "9"
        document.getElementById("screen").textContent = num2;
    }
}
//

function doSum() {
    boolsum = true;
    boolchange = false;
    document.getElementById("screen").textContent = 0;
}

function doSub() {
    boolsub = true;
    boolchange = false;
    document.getElementById("screen").textContent = 0;
}

function doMult() {
    boolmul = true;
    boolchange = false;
    document.getElementById("screen").textContent = 0;
}

function doDiv() {
    booldiv = true;
    boolchange = false;
    document.getElementById("screen").textContent = 0;
}

//

function restart() {
    num1 = 0;
    num2 = 0;
    let boolchange = true;
    let boolsum = false;
    let boolsub = false;
    let booldiv = false;
    let boolmul = false;
    document.getElementById("screen").textContent = 0;
}