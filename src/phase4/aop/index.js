function test() {
    alert(2)
    return "my test"
}
Function.prototype.before = function (fn) {
    var __self = this;
    fn();
    __self.apply(this, this.arguments);
}
Function.prototype.after = function (fn) {
    var __self = this;
    __self.apply(this, this.arguments);
    fn();
}
test.before(function () {
    alert(1)
})
test.after(function () {
    alert(3)
})