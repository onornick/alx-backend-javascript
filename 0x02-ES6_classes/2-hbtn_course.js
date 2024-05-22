export default class HolbertonCourse {
	constructor(name, length, students) {
		this._name = name;
		this._length = length;
		this._students = students;
		}


	get name() {
		return this._name;
	}

	set name(name) {
		if (typeof(name) !== "string") {
			throw new TypeError("Name must be a string");
		}
		this._name = name;
	}


	get length() {
		return this._length;
	}


	set length(value) {
		if (typeof(value) !== "number") {
			throw new TypeError("Value must be a number");
		}
		this._length = value;
	}


	get students() {
		return this._students;
	}


	set students(value) {
		if (typeof(value) !== "object") {
			throw new TypeError("Value must be a object");
		}
		this._students = value;
	}
}
