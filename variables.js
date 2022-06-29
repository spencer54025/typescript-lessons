var fullName = "spencer vp";
var paidAccount = true;
var versionNumber = 1.3;
fullName = 'wack';
paidAccount = false;
console.log(fullName, paidAccount, versionNumber);
// types of data:
// boolean true or false
var bool = false;
// number any number: float or int
// string
// Array: datatype then []
// tuple array or collection when number of items and datatypes are known
// let player : [number, string]
// player = [3, 'correa']
// enum
var Stage;
(function (Stage) {
    Stage[Stage["Approved"] = 0] = "Approved";
    Stage[Stage["Pending"] = 1] = "Pending";
    Stage[Stage["Rejected"] = 2] = "Rejected";
})(Stage || (Stage = {}));
var job = Stage.Pending;
// any is very error prone
var apiData = [123, 'spencer', false, ['heh', 'heh']];
// void used in functions
function printOut(msg) {
    console.log(msg);
}
//# sourceMappingURL=variables.js.map