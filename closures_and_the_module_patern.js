// var a =1;
// function f(){
//     var b=1;
//     console.log(b);
//     function g(){
//         var c = 2;
//         console.log(c);
//         function h(){
//             var d = 3;
//             console.log(d);
//
//         }
//         h();
//     }
//     g();
// }
// f();


function launchRocket(){
    function actuallyLunch(){
        console.log("Lunch sequence");
        console.log("3...2...1....");
        console.log("lift off!");
    }
    actuallyLaunch();
}

launchRocket();
