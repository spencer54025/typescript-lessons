function nameFunction(name: string): void {
    var n : string = name;

    function printName() {
        console.log(n);
    }

    printName();
}

nameFunction('spencer')