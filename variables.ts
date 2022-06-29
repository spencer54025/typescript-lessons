var fullName : string = "spencer vp"
let paidAccount : boolean = true
const versionNumber : number = 1.3

fullName = 'wack'
paidAccount = false

console.log(fullName, paidAccount, versionNumber)

// types of data:
// boolean true or false
let bool : boolean = false;

// number any number: float or int

// string

// Array: datatype then []

// tuple array or collection when number of items and datatypes are known

// let player : [number, string]
// player = [3, 'correa']

// enum
enum Stage {Approved, Pending, Rejected}
let job : Stage = Stage.Pending

// any is very error prone
var apiData : any[] = [123, 'spencer', false, ['heh', 'heh']]

// void used in functions
function printOut(msg: string) : void {
    console.log(msg)
}