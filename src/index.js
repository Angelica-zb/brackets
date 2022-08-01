module.exports = function check(str, bracketsConfig) {
    // console.log(str)
    // console.log(bracketsConfig)

    let res = '';
    let stack = [];

    const BRACKETS = ['2', '3', '4', '5', '6', '7', '8'];
    const OPEN_BRACKETS = ['1', '3', '5', '7', '8'];
    const BRACKETS_PAIR = {
        ['2']: '1',
        ['4']: '3',
        ['6']: '5',
        ['7']: '7',
        ['8']: '8',
    };

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i])
    }

    if (BRACKETS.includes(str[0])) {
        return isBracketsOk(str);

    } else {
        let k = bracketsConfig.map(function(conf) {

            let a = stack.indexOf(conf[0], 0)
            let b = stack.indexOf(conf[1], a + 1)
            if ((b - a) % 2 == 0) { return false }
            // console.log(a)
            // console.log(b)
            while (a >= 0 && b > 0) {

                stack.splice(a, 1)
                stack.splice(b - 1, 1)
                a = stack.indexOf(conf[0], 0)
                b = stack.indexOf(conf[1], a + 1)
            }
        });
        // console.log(stack)
        if (stack.length == 0 || stack.length == 52) { x = true } else { x = false }
        return x
    }

    function isBracketsOk(str) {
        let stack1 = [];

        for (let i = 0; i < str.length; i++) {
            let currentSymbol = str[i];

            if (OPEN_BRACKETS.includes(currentSymbol)) {
                stack1.push(currentSymbol);
            } else {
                if (stack1.length === 0) {
                    return false;
                }

                let topElement = stack1[stack1.length - 1];

                if (BRACKETS_PAIR[currentSymbol] === topElement) {
                    stack1.pop();
                } else {
                    return false;
                }
            }
        }

        if (stack1.length == 0 || stack1.length == 2 || stack1.length == 2) {
            return true
        }
        return false

    }





}