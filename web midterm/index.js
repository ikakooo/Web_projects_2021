
// const btn = document.querySelector('button');

// function random(number) {
//   return Math.floor(Math.random() * (number+1));
// }

// btn.onclick = function() {
//   const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = rndCol;
// }

/// Task 1

const data = [
    ['a', 1],
    ['b', 4],
    ['c', 6]
];

function fromParis(srcArray) {
    return JSON.parse(JSON.stringify(srcArray));
}

console.log(fromParis(data))

/// Task 2 
Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
const data2 = [1, 2, 3, 4, 1, 2, 3]
function without(array, ...args) {
    var i;
    var j;
    var withoutElemets = [];


    for (i = 0; i < array.length; i++) {
        for (j = 0; j < args.length; j++) {
            if (args[i] == array[j]) {
                array.remove(args[i])
            }
        }

    }

    return array
}

console.log(without(data2, 1, 2, 3))

/// Task 3

const data3 = [1, 2, 3, 4, 1, 2, 3]
function unique(arr) {
    return [...new Set(arr)]
}
console.log(unique(data3))

/// Task 4

function doubleAll(numbers) {
    const Array = numbers.map(number => {
        return number * 2
    })
    return Array
}

console.log(doubleAll(data3))


/// task 5



// document.getElementById("inputID").addEventListener("change", myFunction);

// function myFunction() {
//     var x = document.getElementById("inputID");
//     x.value = x.value.toUpperCase();
// }

const input = document.getElementById('inputID');
const log = document.getElementById('value-log');
const updateValue = (e) => {
    //log.textContent = e.target.value;

    $(document).ready(function () {
        if ('badword' != e.target.value) {
            $(".multiplication-table").append(
                '<p>' + e.target.value + '</p>'
            );
        }
        else {

            alert("bad word");
        }
    })
}
input.oninput = updateValue;