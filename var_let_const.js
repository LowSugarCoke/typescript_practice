"use strict";
function example() {
    // let is in the block
    for (let i = 0; i < 5; ++i) {
        console.log(i);
    }
    // error
    // console.log(i); 
    if (true) {
        let white = "white";
    }
    // error
    // console.log(white); 
    // var is in the function
    for (var j = 0; j < 5; ++j) {
        console.log(j);
    }
    console.log(j); // pass
    // var is in the function
    if (true) {
        var color = "red";
    }
    console.log(color);
}
example();
const a = 1;
// error
// a = 10;
