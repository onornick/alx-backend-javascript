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

	get code() {
		return this._code;
	}

	toString() {
		return `[object ${this._code} ]`
	}

	[Symbol.for('nodejs.util.inspect.custom')](depth, opts) {
		return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
