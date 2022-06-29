function profile(user) {
    return "Welcome ".concat(user.firstName, " ").concat(user.lastName, " ").concat(user.email);
}
var realUser = {
    email: 'user@example.com',
    firstName: 'John',
    lastName: 'smith'
};
console.log(profile(realUser));
//# sourceMappingURL=interfaces.js.map