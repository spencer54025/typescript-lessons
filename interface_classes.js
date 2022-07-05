var Admin = /** @class */ (function () {
    function Admin(email) {
        this.email = email;
        this.role = 'admin';
    }
    return Admin;
}());
function profile(user) {
    return "welcome ".concat(user.email);
}
var joe = new Admin('joe@example.com');
console.log(joe.role);
var Post = /** @class */ (function () {
    function Post(post) {
        this.title = post.title;
        this.body = post.body;
    }
    Post.prototype.printPost = function () {
        console.log(this.title);
        console.log(this.body);
    };
    return Post;
}());
var post = new Post({ title: 'title', body: 'body' });
console.log(post.title);
console.log(post.body);
post.printPost();
//# sourceMappingURL=interface_classes.js.map