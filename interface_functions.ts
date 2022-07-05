interface InvoiceFunction { 
    (name : string, total : number) : void;
}

let myInvoice : InvoiceFunction;
myInvoice = function(n, t){
    console.log(n)
    console.log(t)
}

myInvoice('google', 500)