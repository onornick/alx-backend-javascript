export default class Currency {
	constructor(code, name) {
		this._code = code;
		this._name = name;
	}

	set code(value) {
		if (!typeof(value) == "string")
			throw new TypeError("Value must be a string");

		this._code = value;
	}


	get code() {
		return this._code;
	}


	set name(value) {
		if (!typeof(value) == "string")
			throw new TypeError("Value must be a string");

		this._name = value;
	}


	get name() {
		return this._name;
	}


	displayFullCurrency() {
		return `${this.name} (${this.code})`;
	}
}
