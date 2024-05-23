import Currency from "./3-currency.js";

export default class Pricing {
	constructor(amount, currency) {
		this._amount = amount;
		this._currency = currency;
	}

	set amount(value){
		if (!typeof(value) == "string")
			throw new Error("Type of value must be sting");
		this._amount = value;
	}

	get amount() {
		return this._amount;
	}


	set currency(value){
		if (!(value instanceof Currency) == "string")
			throw new Error("Type of value must be sting");
		this._currency = value;
	}

	get currency() {
		return this._currency;
	}

	displayFullPrice() {
		return `${this.amount} ${this.currency.displayFullCurrency()}`;
	}

	static convertPrice(amount, conversionRate) {
		if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
			throw new TypeError('Both amount and conversion rate must be numbers');
			}
		return amount * conversionRate;
  }
}
