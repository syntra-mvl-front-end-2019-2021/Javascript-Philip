const App = {
    data() {
        return {
            lineOne: null,
            lineTwo: null,
            symbol: '',
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
            // this.lineTwo = parseInt(this.lineTwo + '' + number);
            console.log(this.lineTwo);
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
        calculate() {

            if (
                this.lineOne === null ||
                this.lineTwo === null ||
                this.symbol === ''
            ) {
                return;
            }

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

            }
            console.log(this.lineTwo);
            this.lineOne = null;
            this.symbol = '';
        },
        selectSymbol(symbol) {
            console.log(symbol);
            // this.calculate();

            this.lineOne = this.lineTwo;
            this.symbol = symbol;
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
 * [ ] power
 * [ ] backspace
 * [ ] clear
 * [ ] history
 ** [ ] make line two input field
 */

Vue.createApp(App).mount('#vue-app');
