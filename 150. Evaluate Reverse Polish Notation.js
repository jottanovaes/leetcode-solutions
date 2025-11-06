/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const operators = { '+': "+", '-': "-", '*': "*", '/': "/" }

    // cancela operação caso tokens inicie com operador
    if (operators[tokens[0]]) return 0;
    // "cancela" operação caso não tenha a quantidade minima de elementos
    if (tokens.length < 3) return Number(tokens[0]);

    let sum = [];

    for (var i = 0; i <= tokens.length; i++) {
        if (operators[tokens[i]]) {
            const r = Number(sum.pop())
            const l = Number(sum.pop())

            switch (operators[tokens[i]]) {
                case "+":
                    sum.push(l + r)
                    break;
                case "-":
                    sum.push(l - r)
                    break;
                case "*":
                    sum.push(l * r)
                    break;
                case "/":
                    if (r === 0) break;

                    const dv = l / r
                    const decimal = dv % 10
                    sum.push(Math.trunc(l / r))
                    break;

                default:
                    break;
            }

        } else {
            sum.push(tokens[i])
        }
    }
    return sum[0]
};