export default function returnHowManyArguments(...numOfArgs) {
	let total = 0;
	for (let number in numOfArgs) {
		total = total + 1;
	}
	return total;
}
