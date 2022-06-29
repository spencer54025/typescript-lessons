// var names : string[] = ['spencer', 'wack', 'huh'];
// var counter : number = 0;

// (function() {
//     for (let name in names) {
//         counter++;
//     }
// })();
// console.log(counter);

// invoked arguments

// var fullName : (first : string, last : string) => string;

// fullName = function(first : string, last: string) {
//     return first + ' ' + last;
// }

// console.log(fullName('wack', 'huh'));

(function(first : string, last: string) {
    console.log(first + ' ' + last);
})('spencer', 'vp');