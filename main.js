// Khai báo mảng
var pushNumber = [];
document.getElementById("btn__submit").onclick = function() {
    var array = document.getElementById("txtNumber1").value * 1;
    // Thêm number bào mảng pushNumber
    pushNumber.push(array);
    var result = pushNumber;
    var tutorial = "import real number, pls!"
    var texth1 = "select menu, please!";
    var h5__1 = "1.Sum of positive numbers";
    var h5__2 = "2.Count of positive numbers";
    var h5__3 = "3.Find smallest number";
    var h5__4 = "4.Smallest positive number";
    var h5__5 = "5.Find the last even number in array";
    var h5__6 = "6.Change 2 number in array";
    var h5__7 = "7.Sort array in ascending order";
    var h5__8 = "8.Find first prime number in array";
    var h5__9 = "9. Add real number and count interger number"
    var h5__10 = "10.Compare positive numbers and negative numbers";
    var special__1 = "import number 1";
    var special__2 = "import number 2";
    document.getElementById("footer__submit").innerHTML = "Your arrange: " + result + " ";
    document.getElementById("special__1").innerHTML = special__1;
    document.getElementById("special__2").innerHTML = special__2;
    document.getElementById("texth1").innerHTML = texth1;
    document.getElementById("h5__1").innerHTML = h5__1;
    document.getElementById("h5__2").innerHTML = h5__2;
    document.getElementById("h5__3").innerHTML = h5__3;
    document.getElementById("h5__4").innerHTML = h5__4;
    document.getElementById("h5__5").innerHTML = h5__5;
    document.getElementById("h5__6").innerHTML = h5__6;
    document.getElementById("h5__7").innerHTML = h5__7;
    document.getElementById("h5__8").innerHTML = h5__8;
    document.getElementById("tutorial").innerHTML = tutorial;
    document.getElementById("h5__9").innerHTML = h5__9;
    document.getElementById("h5__10").innerHTML = h5__10;
}


// Question 1
function suminArray(pushNumber) {
    var temp = 0;
    for (var i = 0; i < pushNumber.length; i++) {
        temp += pushNumber[i];
    }
    return temp;
}

document.getElementById("btn1").onclick = function() {
    var result = suminArray(pushNumber);
    document.getElementById("p1").innerHTML = "Sum of positive numbers:  " + result;
}


// Question 2


document.getElementById("btn2").onclick = function() {
    var count = 0;
    for (var i = 0; i < pushNumber.length; i++) {
        if (pushNumber[i] >= 0) {
            count++;
        }
    }
    var sumNumber = "Count number: " + count;
    document.getElementById("p2").innerHTML = sumNumber;
}


// Question 3
function smallestNumber() {
    var min = pushNumber[0];
    for (var i = 1; i < pushNumber.length; i++) {
        if (min > pushNumber[i]) {
            min = pushNumber[i];
        }

    }
    return min;
}
document.getElementById("btn3").onclick = function() {
    var result = smallestNumber(pushNumber);
    document.getElementById("p3").innerHTML = "Smallest number in array is: " + result;
}

// Question 4

document.getElementById("btn4").onclick = function() {
    var result = smallestPositiveNumber(pushNumber);
    document.getElementById("p4").innerHTML = "Smallest positive number is: " + result;
}

function smallestPositiveNumber() {
    var min = "";
    for (var i = 0; i < pushNumber.length; i++) {
        if (pushNumber[i] >= 0) {
            min = pushNumber[i];
            break;
        }
    }
    for (var i = 0; i < pushNumber.length; i++) {
        if (pushNumber[i] > 0 && pushNumber[i] < min) {
            min = pushNumber[i];
        }
    }
    return min;
}



// Question 5


document.getElementById("btn5").onclick = function() {

    var result = findLastEven(pushNumber);
    document.getElementById("p5").innerHTML = "Last even number is: " + result;
}

function checkOddEven(number) {
    //flag = 1 => số lẻ 
    //flag = 0 => số chẵn

    var flag = 1;
    if (number % 2 == 0) {
        flag = 0;
    }
    return flag;
}

function findLastEven(pushNumber) {
    for (var i = pushNumber.length - 1; i >= 0; i--) {
        if (checkOddEven(pushNumber[i]) == 0) {
            return pushNumber[i];
        }
    }
    return -1;
}
//Question 6
document.getElementById("btn6").onclick = function() {
    var position__a = +document.getElementById("number1").value;
    var position__b = +document.getElementById("number2").value;

    var value__a;
    var value__b;


    var positionofa;
    var positionofb;

    for (var i = 0; i < pushNumber.length; i++) {
        if (i == position__a) {
            value__a = pushNumber[i];
            positionofa = i;
        } else if (i == position__b) {
            value__b = pushNumber[i];
            positionofb = i;
        }
    }

    pushNumber[positionofa] = value__b;
    pushNumber[positionofb] = value__a;
    document.getElementById("p6").innerHTML = "after change 2 number: " + pushNumber;
}

// Question 7


function sortArray() {
    for (var i = 0; i < pushNumber.length - 1; i++) {
        for (var j = i + 1; j < pushNumber.length; j++) {
            if (pushNumber[i] > pushNumber[j]) {
                var temp = pushNumber[i];
                pushNumber[i] = pushNumber[j];
                pushNumber[j] = temp;
            }
        }
    }
    return pushNumber;
}
document.getElementById("btn7").onclick = function() {
    var result = sortArray();
    document.getElementById("p7").innerHTML = "After ascending sort: " + result;
}


// Question 8

function checkPrimeNumber(number) {
    if (number < 2) {
        return false;
    } else if (number > 2) {
        if (number % 2 == 0) {
            return false;
        }
    }
    for (var i = 3; i < Math.sqrt(pushNumber.length); i += 2) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

function findFirstPrime(pushNumber) {
    for (var i = 0; i < pushNumber.length; i++) {
        if (checkPrimeNumber(pushNumber[i]) == true) {
            return pushNumber[i];
        }
    }
    return -1;
}
document.getElementById("btn8").onclick = function() {
    var result = findFirstPrime(pushNumber);
    document.getElementById("p8").innerHTML = "Frist prime number is: " + result;
}

// Question 9



document.getElementById("addNumber").onclick = function() {
    var array = document.getElementById("txtbigCard").value * 1;
    // Thêm number vào mảng pushNumber
    pushNumber.push(array);
    var result = pushNumber;
    document.getElementById("p9").innerHTML = "Your arrange: " + result + " ";
}
document.getElementById("btn9").onclick = function() {
    var printReSult = countInterger();
    document.getElementById("aftercount").innerHTML = "After counting: " + printReSult;
}

function countInterger() {
    var count = 0;
    for (var i = 0; i < pushNumber.length; i++) {
        if (pushNumber[i] % 1 == 0) {
            count++;
        }
    }
    return count;
}

// Question 10


function countPositiveNegative() {
    var countPositive = 0;
    var countNegative = 0;
    for (var i = 0; i < pushNumber.length; i++) {
        if (pushNumber[i] > 0) {
            countPositive++;
        }
        if (pushNumber[i] < 0) {
            countNegative++;
        }
    }
    if (countPositive > countNegative) {
        var result = "more positive numbers than Negative numbers" + "<br/>" + countPositive + ">" + countNegative;
    } else if (countPositive < countNegative) {
        result = "more Negative numbers than positive numbers" + "<br/>" + countPositive + "<" + countNegative;
    } else {
        result = "positive numbers the equal Negative numbers" + "<br/>" + countPositive + "=" + countNegative;
    }
    return result;
}
document.getElementById("btn10").onclick = function() {
    var result = countPositiveNegative();
    document.getElementById("p10").innerHTML = result;
}