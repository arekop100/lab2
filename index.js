var _ = require('lodash');

function sum() {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') return new Error(i + '.Invalid variable type ' + typeof arguments[i])
    }

    var suma = _.mean(arguments)
    console.log(suma)
}


function min() {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') return new Error(i + '.Invalid variable type ' + typeof arguments[i])
    }

    var mina = _.min(arguments)
    console.log(mina)
}


function max() {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') return new Error(i + '.Invalid variable type ' + typeof arguments[i])
    }

    var maxa = _.max(arguments)
    console.log(maxa)
}

sum(2, 4, 6)
min(2, 4, 6)
max(2, 4, 6)


const user = {
    name: 'Imie',
    "surname": 'Nazwisko',
    "allGrades": [
        {
            "subjectName": 'Name1',
            "grades": [5, 4, 3, 5, 2],
            "weight": 3
        },
        {
            "subjectName": 'Name2',
            "grades": [3, 3.5, 2],
            "weight": 1
        },
        {
            "subjectName": 'Name3',
            "grades": [4, 3, 3.5],
            "weight": 5
        }
    ]
};


function s_wazona(arr){
    var suma = 0
    var dziel = 0
    for(var i = 0; i < arr.allGrades.length; i++){
        var tab = arr.allGrades[i]
        suma += _.sum(tab.grades)*tab.weight
        dziel += tab.grades.length * tab.weight
    }
    return suma/dziel
}

console.log(s_wazona(user))



const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
];


function getMails(ob){
    const reg = new RegExp(/^\S+@\S+\.[A-Za-z]+$/);
    let myArray = [];
    for(const x of ob){
        if(typeof x === "string"){
            if(reg.test(x)){
                myArray.push(x);
            }
        }
    }
    return myArray.sort();
}
let k = getMails(collections);
console.log("Zadanie 4: "+k);