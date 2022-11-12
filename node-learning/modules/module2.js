var func1 = function () {
    console.log('func1/abcFunc called');
}

exports.abcFunc = func1;

exports.defFunc = function () {
    console.log('defFunc called')
}