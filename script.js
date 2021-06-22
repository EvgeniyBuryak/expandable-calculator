let powerCalc = new Calculator;

console.log(powerCalc.calculate("3 + 7"));  // 10
console.log(powerCalc.calculate("16 - 7")); // 9

function Calculator() {
    this.a;
    this.b;
    //this.operator;
    this.calculate = function(str) {

        let arr = str.split(" ");
        this.a = +arr[0];
        this.b = +arr[2];

        let operator = arr[1];

        switch (operator) {
            case "+":
                return this.a + this.b;
            case "-":
                return this.a - this.b;
            case "*":
                return this["*"](this.a, this.b);
            default:
                break;
        }
    }
    this.addMethod = function (operator, func) {
        this[operator] = func;
    }
}

powerCalc.addMethod("*", (a, b) => a * b);
//powerCalc.addMethod("/", (a, b) => a / b);
//powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("3 * 8"); // 24
console.log(`Результат: ${result}`);

console.log(powerCalc);