var _ = require('lodash');

function sum() {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') return new Error(i + '.Invalid variable type ' + typeof arguments[i])
    }

    var suma = _.mean(arguments)
    console.log(suma)
}

sum(2, 4, 6)