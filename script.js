let powerCalc = new Calculator;

console.log(powerCalc.calculate("3 +f 7"));  // "Такой оператор не определен!"
console.log(powerCalc.calculate("136 - 79")); // 57

function Calculator() {    

    /**
     * this.methods подсмотрел в решение задания
     * добавил себе на всякий
     * */
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    };

    this.calculate = function (str) {

        let arr = str.split(" ");
        let a = +arr[0];
        let b = +arr[2];

        if (isNaN(a) || isNaN(b)) return "Входящие значения не корректны!";

        let operator = arr[1];

        switch (operator) {
            case "+":
                return a + b;
            case "-":
                return this.methods[operator](a, b);
            //case "*":
                //return this["*"](a, b);
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
        return this[operator]?.(a, b) ?? "Такой оператор не определен!";
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