// // An immediately invoked function expression IIFE
// const calculatorControl = (() => {


// })();


// // An immediately invoked function expression IIFE
// const interfaceController = (() => {
//     // create an object containing all classname as will be used in querySelector 
//     // this is used in case a class name is changed, we dont need to edit the whole code
//     const DOMStrings = {
//         square: '.btn-square',
//         inverse: '.btn-inv',
//         cube: '.btn-cube',
//         power: '.btn-power',
//         log: '.btn-log',
//         ln: '.btn-ln',
//         sqrt: '.btn-sqrt',
//         braceRight: '.btn-brace1',
//         braceLeft: '.btn-brace2',
//         sin: '.btn-sin',
//         cos: '.btn-cos',
//         tan: '.btn-tan',
//         zero: '.btn-0',
//         one: '.btn-1',
//         two: '.btn-2',
//         three: '.btn-3',
//         four: '.btn-4',
//         five: '.btn-5',
//         six: '.btn-6',
//         seven: '.btn-7',
//         eight: '.btn-8',
//         nine: '.btn-9',
//         delete: '.btn-del',
//         clear: '.btn-clear',
//         mul: 'btn-mul',
//         div: '.btn-div',
//         add: '.btn-add',
//         sub: '.btn-sub',
//         answer: '.btn-ans',
//         equal: '.btn-equal',
//         pi: '.btn-pi',
//         dot: '.btn-dot'
//     };
//     // this return help the following object and functions usefull outside the function
//     return {
//         // A function to return the DOMstrings to the mainInterface
//         getDOMStrings: () => {
//             return DOMStrings;
//         }
//     };
// })();

// // An immediately invoked function expression IIFE
// const mainInterface = ((calcCtrl, interfaceCtrl) => {
//     //get the DOM object from the interfaceController
//     const DOM = interfaceCtrl.getDOMStrings();
    
//     // addEventListener
//     return {
//         initializer: () => {
//              return {
                
//             };
//         }
//     };

// })(calculatorControl, interfaceController);
let expresssion = "", ans, expression1, interval;
// mainInterface.initializer();
document.querySelector('.prob-main').textContent = '';
document.querySelector('.sol').textContent = '';
let indicator = document.querySelector('.indicator').style;
indicator.display = 'none';
console.log(interval);
const startIndicating = () =>{
    if (interval == undefined || interval == 1){
        interval = setInterval(() => {
            if (indicator.display == 'inline') {
                indicator.display = 'none';
            }else {
                indicator.display = 'inline';
            }
       }, 500);
    }
}
startIndicating();
const buttonProcessor =  val  => {
    startIndicating();
    expresssion += val;
    console.log(expresssion);
    document.querySelector('.prob-main').textContent = expresssion;
    expression1 = expresssion.replace('Ans', 6);
    expression1 = expression1.replace('x', '*');
    expression1 = expression1.replace('sqrt(', 'Math.sqrt(');
    expression1 = expression1.replace('sin(', 'Math.sin(');
    expression1 = expression1.replace('cos(', 'Math.cos(');
    expression1 = expression1.replace('tan(', 'Math.tan(');
    expression1 = expression1.replace('log(', '0.4342944819*Math.log(');
    expression1 = expression1.replace('ln(', 'Math.log(');
    expression1 = expression1.replace('^-1', '**-1');
    expression1 = expression1.replace('^2', '**2');
    expression1 = expression1.replace('^3', '**3');
    expression1 = expression1.replace('^', '**');
    expression1 = expression1.replace('pi', '3.141592654');
    console.log(expression1);
    console.log(`Answer is ${ans}`);
    startIndicating();
}
const processAnswer = () => {
    ans = eval(expression1);
    document.querySelector('.prob-main').textContent = expresssion;
    document.querySelector('.sol').textContent = ans;
    console.log(ans);
    clearInterval(interval);
    indicator.display = 'none';

}
const delScreen = () => {
    if (expresssion.endsWith('sin(') || expresssion.endsWith('cos(') || expresssion.endsWith('tan(') || expresssion.endsWith('log(')) {
        expresssion =  expresssion.substr(0, (expresssion.length - 4));
    } else if (expresssion.endsWith('sqrt(')){
        expresssion =  expresssion.substr(0, (expresssion.length - 5));
    } else if (expresssion.endsWith('Ans') || expresssion.endsWith('ln(')){
        expresssion =  expresssion.substr(0, (expresssion.length - 3));
    } else if (expresssion.endsWith('pi')){
        expresssion =  expresssion.substr(0, (expresssion.length - 2));
    } else {
        expresssion =  expresssion.substr(0, (expresssion.length - 1));
    }
    document.querySelector('.prob-main').textContent = expresssion;
    console.log(expresssion);
    startIndicating();
}
const clearScreen = () => {
    expresssion = "";
    document.querySelector('.sol').textContent = '';
    document.querySelector('.prob-main').textContent = expresssion;
    startIndicating();
} 
// document.querySelector('.indicator').
