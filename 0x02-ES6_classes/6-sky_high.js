import Building from "./5-building.js";

export default class SkyHighBuilding extends Building {
	constructor(sqft, floors){
		super(sqft);
		this._floors = floors;
	}

	get floors() {
		return this._floors;
	}

	set floors(value) {
		if (typeof(value) !== "number"){
			throw new Error("Value must be a number");
		}

		this._floors = value;
	}

	evacuationWarningMessage() {
		return `Evacuate slowly the ${this._floors} floors`
	}
}
