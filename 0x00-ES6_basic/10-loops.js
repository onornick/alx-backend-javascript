export default function appendToEachArrayValue(array, appendString) {
	let myList = [];
  for (let value of array) {
	  myList.push(appendString + value);

  }

  return myList;
}
