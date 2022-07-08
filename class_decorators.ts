@detailedLog('billing')
class AccountsPayable {
    constructor() {}
}

@detailedLog('warehouse')
class ProductManager {
    constructor() {}
}


function detailedLog( dashboard: string){
    if(dashboard == 'billing'){
        console.log('working in the billing department')
        return function (target : Object) {};
    } else {
        console.log('not working in the billing department')
        return function (targer : Object) {};
    }
}

var post = new AccountsPayable;
var pm = new ProductManager;