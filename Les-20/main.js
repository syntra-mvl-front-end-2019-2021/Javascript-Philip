const App = {
    data() {
        return {
            lineOne: null,
            lineTwo: null,
            symbol: '',
            history: {
                first: '',
                sym: '',
                second: '',
            },
            showHistory: true,
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

            // if (
            //     this.lineOne === null ||
            //     this.lineTwo === null ||
            //     this.symbol === ''
            // ) {
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
            this.history.first = this.lineTwo;
            console.log(this.history.first);
            this.history.second = this.lineTwo;
            console.log(this.history.second);

            this.lineOne = null;
            this.symbol = '';
        },
        selectSymbol(symbol) {
            console.log(symbol);
            this.calculate();

            this.lineOne = this.lineTwo;
            this.symbol = symbol;
            this.history.sym = this.symbol;
            this.lineTwo = null;
        },
        reset() {
            this.showHistory = false;
            this.lineOne = null;
            this.lineTwo = null;
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
