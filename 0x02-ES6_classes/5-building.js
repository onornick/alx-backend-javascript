export default class Building {
	constructor(sqft) {
		if(new.target !== Building && this.evacuationWarningMessage === undefined) {
			throw new Error("Class extending Building must override evacuationWarningMessage");
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
}
