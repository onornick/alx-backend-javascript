export default class Building {
	constructor(sqft) {
		if(new.target === Building) {
			throw new Error("Cannot instantiate an abstract class");
			}
		this._sqft = sqft;
	}

	set sqft(value) {
		if(typeof(value) !== "number") {
			throw new Error("Value must be a number");
		}

		this._sqft = value;
	}

	get sqft() {
		return this._sqft;
	}

	evacuationWarningMessage(){
		throw new Error("extending Building must override evacuationWarningMessage");
	}
}
