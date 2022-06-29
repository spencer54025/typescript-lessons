interface User {
    email : string;
    firstName? : string;
    lastName? : string;
}

// question mark at end of variable makes the varaible optional

function profile(user: User) {
    return `Welcome ${user.firstName} ${user.lastName} ${user.email}`;
}

var realUser = {
    email: 'user@example.com',
    firstName: 'John',
    lastName: 'smith',
}

console.log(profile(realUser))