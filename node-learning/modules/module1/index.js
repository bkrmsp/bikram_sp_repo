var subject = 'Computer Science';       //LOCAL VARIABLE WITH THE SAME NAME AS GLOBAL VARIABLE

console.log('global 2', global);
module.exports = function () {
    console.log(`My favourite subject is ${ subject }`);
}