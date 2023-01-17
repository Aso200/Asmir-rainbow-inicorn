var djur = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(djur);
var value = ["aso", 2, true];
console.log(value);
function greet(x) {
    return "hej ".concat(x);
}
console.log(greet("aso"));
for (var i in djur) {
    console.log(greet(djur[i]));
}
;
