function calculator(string){
    function identifyInput(s) {
        let arr = s.split(' ');
        let arabic = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        let rome = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
        if (arabic.includes(arr[0]) && arabic.includes(arr[2]) && arr.length <= 3) {
            return 'arabic';
        }
        else if (rome.includes(arr[0]) && rome.includes(arr[2]) && arr.length <= 3) {
            return 'rome';
        }
        else {
            throw Error();
        }
    }
    
    function calculation(s) {
        let arr = s.split(' ');
        let operators = ["+", "-", "*", "/"];
        let x = parseInt(arr[0], 10);
        let y = parseInt(arr[2], 10);
        if (operators.includes(arr[1])) {
            switch (arr[1]) {
                case "+":
                    return x + y;
                case "-":
                    return x - y;
                case "*":
                    return x * y;
                case "/":
                    return Math.floor(x / y);
            }
        }
        throw Error();
    }
    
    function toArab(s) {
        let romeNumbers = {
            "I": 1,
            "II": 2,
            "III": 3,
            "IV": 4,
            "V": 5,
            "VI": 6,
            "VII": 7,
            "VIII": 8,
            "IX": 9,
            "X": 10
        };
        let numbers = s.split(' ');
        let str = '';
        for (let i = 0; i < numbers.length; i++) {
            for (let el in romeNumbers) {
                if (el == numbers[i]) {
                    numbers[i] = romeNumbers[el];
                }
            }
        }
        str = numbers.join(' ');
        return str;
    }
    
    function toRome(num) {
        let str = '';
        let romanList = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };
        if (num > 0) {
            for (let key in romanList) {
                let a = Math.floor(num / romanList[key]);
                if (a >= 0) {
                    for (let i = 0; i < a; i++) {
                        str += key;
                    }
                }
                num = num % romanList[key];
            }
        }
        else {
            return '';
        }
        return str;
    }
    
    function calc(s) {
        let result = null;
        let strRome = '';
        let type = identifyInput(s);
        if (type == 'arabic') {
            result = calculation(s);
        }
        else if (type == 'rome') {
            strRome = toArab(s);
            result = calculation(strRome);
            result = toRome(result);
        }
        return result.toString();
    }
    
    return calc(string)
}

module.exports = calculator;