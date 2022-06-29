var Invoice = /** @class */ (function () {
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ', ' + city + ', ' + state;
    }
    return Invoice;
}());
var googleInvoice = new Invoice('google', 'mountain view', 'state');
var yahooInvoice = new Invoice('yahoo', 'SF', 'State');
console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);
//# sourceMappingURL=classes.js.map