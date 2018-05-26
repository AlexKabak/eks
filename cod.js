var n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var m = [];
var s = 0;
if (n.length > 0){
    for (var i = 0; i < n.length; i++){
        if (i % 2 === 0){
            s += n[i];
        }}
    console.log(s * n[n.length-1]);
}else {console.log(0)}
