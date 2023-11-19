var output = document.body;

function modifyArray() {
    let array1 = [1, 2, 3, "four"];
    output.innerHTML += "<p>1. Початковий масив: " + array1.join(", ") + "</p>";

    array1.unshift("start");
    array1.pop();
    array1[1] = "modified";

    output.innerHTML += "<p>Кінцевий масив: " + array1.join(", ") + "<br><br></p>";
}

modifyArray();

function arrayOperations() {
    let array2 = [5, 6, 7, "eight"];
    output.innerHTML += "<p>2. Початковий масив: " + array2.join(", ") + "</p>";

    array2.push("end");
    array2.shift();
    array2.splice(3, 0, "middle");

    output.innerHTML += "<p>Кінцевий масив: " + array2.join(", ") + "<br><br></p>";
}

arrayOperations();  

function checkInteger(number) {
    if (Number.isInteger(number)) {
        return "Число ціле";
    } else {
        return "Число не ціле";
    }
}

let x = checkInteger(8);
let y = checkInteger(9.5);
let z = checkInteger(15);

output.innerHTML += "<p>3. Число 8 =" + x + "</p>";
output.innerHTML += "<p>Число 9.5 =" + y + "</p>";
output.innerHTML += "<p>Число 15 =" + z + "</p>";
