//   console.log("My code is running!");
//         let greet= function(name){
//             console.log('hello ,'+name);
//         }

// let setClassTip = function () {
//     let el = document.getElementById('mypara');
//     el.className = 'tip';
// }

// let setClassWarning = function () {
//     let el = document.getElementById('mypara');
//     el.className = 'warning';
// }
// let clearClass = function () {
//     let el = document.getElementById('mypara');
//     el.className = '';
// }


// let setClass = function (className) {
//     let el = document.getElementById('mypara');
//     el.className = className;
// }

let setClass = function (className) {
    document.getElementById('mypara').className = className;
}

let makeWarning = document.getElementById("make-warning");
makeWarning.addEventListener('click', function (event) {
    setClass('warning');
});

let makeTip = document.getElementById("make-tip");
makeTip.addEventListener('click', function (event) {
    setClass('tip');
});
let makeNormal = document.getElementById("make-normal");
makeNormal.addEventListener('click', function (event) {
    setClass('');
});
