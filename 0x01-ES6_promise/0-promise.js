export default function getResponseFromAPI(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		const data = {message: "Hello World"};
			resolve(data);
		}, 1000);
	});
}
