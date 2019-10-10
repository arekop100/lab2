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