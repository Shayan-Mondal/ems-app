function muli(n,m){
    return n*m;
}

let mul = function(c,d){
    return c*d;
}

//Lambda Function
let mulii = (c,d) => {
    return c*d;
}

//Lambda with single line statement
let sta = () => console.log("Hey Lambda!");

let out1 = muli(2,3);
let out2 = mul(5,4);
let out3 = muli(6,5);
sta();

console.log(out1, out2, out3);