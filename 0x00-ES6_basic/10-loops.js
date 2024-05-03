export default function appendToEachArrayValue(array, appendString) {
	var myList = [];
  for (var value of array) {
	  myList.push(appendString + value);

  }

  return myList;
}
