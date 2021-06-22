let calc = new Calculator;

console.log(calc.calculate("3 + 7")); // 10
console.log(calc.calculate("16 - 7")); // 9
console.log(calc);

function Calculator() {
    this.a;
    this.b;
    this.operator;
    this.calculate = function(str) {

        let arr = str.split(" ");
        this.a = +arr[0];
        this.b = +arr[2];

        this.operator = arr[1];

        switch (this.operator) {
            case "+":
                return this.a + this.b;
            case "-":
                return this.a - this.b;
            default:
                break;
        }
    }
}