// declaration
function fullName(first, last) {
    return first + " " + last;
}
// expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('wack', 'huh'));
console.log(otherFullName('wack', 'huh'));
console.log(thirdFullName('wack', 'huh'));
//# sourceMappingURL=declarations_vs_expressions.js.map