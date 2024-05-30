interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const stud1: Student = {
	firstName: 'John',
	lastName: 'Kiarie',
	age: 20,
	location: 'Juja'
};

const stud2: Student = {
	firstName: 'Kevin',
	lastName: 'Rono',
	age: 30,
	location: 'Town'
};

const studentsList: Student[] = [stud1, stud2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
	const row = document.createElement('tr');

	const firstNameCell = document.createElement('td');
	firstNameCell.textContent = student.firstName;

	const locationCell = document.createElement('td');
	locationCell.textContent = student.location;

row.appendChild(firstNameCell);
row.appendChild(locationCell);
tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
