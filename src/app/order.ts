export class Order {
    constructor(
        public name: string,
        public contactNum: number,
        public gender: string,
        public dob: Date,
        public orderDate: Date,
        public orderType: string,
        public orderUnit: number,
        public qrcodeURL?: string,
        public bitcoinURL?: string,
        public totalAmt?: number

    ) {

    }
}