const App = {
    data() {
        return {
            lineOne: null,
            lineTwo: null,
            symbol: '',
            calculation: [],
            newCalc: '',
            calcArr: [],
        };
    },
    methods: {
        addNumber(number) {
            console.log(number);
            if (this.lineTwo === null) {
                this.lineTwo = number;
                return;
            }
            this.lineTwo = parseInt('' + this.lineTwo + number);
        },
        sum() {
            return this.lineOne + this.lineTwo;
        },
        minus() {
            return this.lineOne - this.lineTwo;
        },
        product() {
            return this.lineOne * this.lineTwo;
        },
        divide() {
            return this.lineOne / this.lineTwo;

        },
        power() {
            return this.lineOne * this.lineOne;
        },
        calculate() {

            if (
                this.lineOne === null ||
                this.lineTwo === null ||
                this.symbol === ''
            ) {
                return;
            }
            this.calculation.push(this.lineTwo);
            console.log(this.calculation);

            // if (this.selectSymbol) {
            //     return;
            // }

            switch (this.symbol) {
                case '+':
                    this.lineTwo = this.sum();
                    break;
                case '-':
                    this.lineTwo = this.minus();
                    break;
                case '*':
                    this.lineTwo = this.product();
                    break;
                case '/':
                    this.lineTwo = this.divide();
                    break;
                case '²':
                    this.lineTwo = this.power();
                    break;

            }
            this.calculation.push('=');

            this.calculation.push(this.lineTwo);
            console.log(this.calculation);

            this.newCalc = this.calculation.join('');
            console.log(this.newCalc);

            this.lineOne = null;
            this.symbol = '';
        },
        selectSymbol(symbol) {
            if (this.lineOne !== null && this.lineTwo !== null) {

                this.calculation.push(this.lineTwo);
                console.log(this.calculation);
                this.calculation.push(symbol);
                console.log(this.calculation);

                this.lineOne = this.lineTwo;
                this.lineTwo = null;
                return;
            }

            this.calculation.push(this.lineTwo);
            console.log(this.calculation);

            this.calculation.push(symbol);
            console.log(this.calculation);

            this.calculate();

            this.lineOne = this.lineTwo;
            this.symbol = symbol;
            this.lineTwo = null;
        },
        reset() {
            this.lineOne = null;
            this.lineTwo = null;

            this.calcArr.push(this.newCalc);

            this.calculation = [];
            this.newCalc = '';

            console.log(this.calcArr);
            console.log(this.calcArr.join());
        },
    },
};


/**
 * [x] styling
 * [x] product
 * [x] minus
 * [x] divide
 * [ ] root
 * [x] power
 * [ ] backspace
 * [x] clear
 * [ ] history
 ** [ ] make line two input field
 */

Vue.createApp(App).mount('#vue-app');
