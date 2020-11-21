export class Order {
    constructor(
        public name: string,
        public contactNum: number,
        public gender: string,
        public dob: Date,
        public orderDate: Date,
        public orderType: string,
        public paymentURL: string,
        public orderUnit: number,
        public totalAmt?: number

    ) {

    }
}