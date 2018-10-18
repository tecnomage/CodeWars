(function teste(od,cb,arr){

depthFirstTraverse(od,cb,arr)

function depthFirstTraverse(order, callback) {
    order === "pre" && callback(this.value);
    this.left && this.left.depthFirstTraverse(order, callback);
    order === "in" && callback(this.value);
    this.right && this.right.depthFirstTraverse(order, callback);
    order === "post" && callback(this.value);
}


})("pre",value => _pre.push(value),[5, 3, 1, 2, 4, 6, 7, 8, 10, 9])