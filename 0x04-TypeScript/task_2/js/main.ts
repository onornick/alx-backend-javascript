interface DirectorInterface {
	workFromHome(): string,
	getCoffeeBreak(): string,
	workDirectorTasks(): string
}

interface TeacherInterface {
	workFromHome(): string,
	getCoffeeBreak(): string,
	workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
	workFromHome(): string {
		return "Working from home";
	}

	getToWork(): string {
		return "Getting a coffee break";
	}

	getCoffeeBreak(): string {
		return "Cannot have a break";
	}

	workDirectorTasks(): string {
		return "Getting to director tasks";
	}
}

export class Teacher implements TeacherInterface {
	workFromHome(): string {
		return "Cannot work from home";
	}

	getCoffeeBreak(): string {
		return "Cannot have a break";
	}

	workTeacherTasks(): string {
		return "Getting to work";
	}

}

export function createEmployee(salary: string | number): Teacher | Director {
	if (typeof(salary) == "number" && salary < 500 )
		return new Teacher()
	return new Director();
}

export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
	return employee instanceof Director;
}

export function executeWork(employee: DirectorInterface | TeacherInterface) {
	if (employee instanceof Director)
		employee.workDirectorTasks;
	else if(employee instanceof Teacher)
		employee.workTeacherTasks;
}
