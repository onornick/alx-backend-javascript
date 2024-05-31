interface DirectorInterface {
	workFromHome(): string,
	getCoffeeBreak(): string,
	workDirectorTasks(): string
}

interface TeacherInterface extends DirectorInterface {
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome(): string {
		return "Working from home";
	}

	getToWork(): string {
		return "Getting a coffee break";
	}

	workDirectorTasks(): string {
		return "Getting to director tasks";
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return "Working from home";
	}

	getCoffeeBreak(): string {
		return "Getting a coffee break";
	}

	workTeacherTasks(): string {
		return "Getting to work";
	}

}

export function createEmployee(salary: string | string) Teacher | Director {
	if (typeof(salary) == "number" && salary < 500 )
		return new Teacher()
	return new Director();
}
