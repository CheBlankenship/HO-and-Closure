// function cipher(text) {
//   var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
//   var result = '';
//   for (var i = 0; i < text.length; i++) {
//     var chr = text[i];
//     var idx = alphabet.indexOf(chr.toUpperCase());
//     var newIdx = idx + 13;
//     if (newIdx >= alphabet.length) {
//       newIdx -= 26;
//     }
//     result += alphabet[newIdx];
//   }
//   return result;
// }
// var encrypted = cipher('GENIUS');
// console.log(encrypted);

var string = "CHANGE THE WORDS TO CODES";
var arr = string.split('');
// ['h', 'e', 'l', 'l', 'o']
function makeArry(){
    return arr.map(function(change){
    var to_ascii = change.charCodeAt(0);
    var add = to_ascii +120;
    var to_str = String.fromCharCode(add);
    return to_str;
    });
}

function cipher(fun){
    return makeArry(arr).join("");
  }
console.log(cipher(makeArry));



// .map(function(back_to_str){
//     var back_str = String.fromCharCode(back_to_str);
//     return back_str;
