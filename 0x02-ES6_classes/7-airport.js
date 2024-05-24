export default class Airport {
	constructor(name, code) {
		this._name = name;
		this._code = code;
	}

	set name(value) {
		if (typeof(value) !== "string"){
			throw new Error("Value must be a string");
		}

		this._name = value;
	}

	get name() {
		return this._name;
	}

	set code(value) {
		if (typeof(value) !== "string"){
			throw new Error("Value must be a string");
		}

		this._code = value;
	}

	get name() {
		return this._code;
	}

	toString() {
		return `[object ${this._code} ]`
	}
}
