function parent() {
    
    var message = "Hello";
    var child = function() {
        //using the reference of var message, not the value
        console.log("child: " + message);
    }
    message = "Bye";
    console.log("parent: " + message);
    return child;
}
var fn = parent();
fn();
