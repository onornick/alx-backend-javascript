export interface Teacher {
	readonly firstName: string,
       	readonly lastName: string,
	fullTimeEmployee: True,
	yearsOfExperience: number;
	location: string,
	[key: string]: any;
}
