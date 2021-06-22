let powerCalc = new Calculator;

console.log(powerCalc.calculate("3 +f 7"));  // "Такой оператор не определен!"
console.log(powerCalc.calculate("136 - 79")); // 9

function Calculator() {    

    this.calculate = function (str) {

        let arr = str.split(" ");
        this.a = +arr[0];
        this.b = +arr[2];

        if (isNaN(this.a) || isNaN(this.b)) return "Входящие значения не корректны!";

        let operator = arr[1];

        switch (operator) {
            case "+":
                return this.a + this.b;
            case "-":
                return this.a - this.b;
            //case "*":
                //return this["*"](this.a, this.b);
            default:
                break;
        }
        /*
         * Ниже обработка операций добавленных
         * с помощью addMethod
         *
         * .? - опциональная цепочка, если не найдено
         * свойства объекта, возвращает "undefined"
         *
         * ?? - проверяет на "undefined", если да,
         * выполняется творое выражение
         * */
        return this[operator]?.(this.a, this.b) ?? "Такой оператор не определен!";
    }
    this.addMethod = function (operator, func) {
        this[operator] = func;
    }
}

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("25 / 5"); // 5
console.log(`Результат: ${result}`);

console.log(powerCalc.calculate("3 * 3u")); // "Входящие значения не корректны!"