export default function getFullResponseFromAPI(success){
	return new Promise((resolve, reject) => {
		const data = {
			status: 200,
			body: "success",
		};

		if (success == true){
			resolve(data);
		} else {
			reject(new Error("The fake API is not working currently"));
		}
			
	});
}
