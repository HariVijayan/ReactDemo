class Student {
    name: string;
    marks: number[];
    average: number; 
    static totalClassAverage: number[] = []; 

    constructor(name: string, marks: number[]) {
        this.name = name;
        this.marks = marks;
        this.average = this.calculateAverage();
        Student.totalClassAverage.push(this.average); 
    }

    calculateAverage(): number {
        const sum = this.marks.reduce((acc, cur) => acc + cur, 0);
        return sum / this.marks.length;
    }

    calculateGrade(): string {
        const average = this.average; 
        if (average >= 90) {
            return 'A';
        } else if (average >= 80) {
            return 'B';
        } else if (average >= 70) {
            return 'C';
        } else if (average >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    }

    static calculateClassAverage(): number {
        const sum = Student.totalClassAverage.reduce((acc, cur) => acc + cur, 0);
        return sum / Student.totalClassAverage.length;
    }
}

function handleSubmit(event: Event) {
    event.preventDefault();

    const studentsDiv = document.getElementById('students') as HTMLDivElement;
    const studentInputs = studentsDiv.querySelectorAll('.student');

    const output = document.getElementById('output') as HTMLElement;
    output.innerHTML = '';

    Student.totalClassAverage = [];

    studentInputs.forEach((studentInput: Element) => {
        const nameInput = studentInput.querySelector('.name') as HTMLInputElement;
        const marksInput = studentInput.querySelector('.marks') as HTMLInputElement;

        const name = nameInput.value;
        const marks = marksInput.value.split(',').map(Number);

        const student = new Student(name, marks);

        const average = student.average; 
        const grade = student.calculateGrade();

        output.innerHTML += `<p>Name: ${name}</p>`;
        output.innerHTML += `<p>Marks: ${marks.join(', ')}</p>`;
        output.innerHTML += `<p>Average: ${average.toFixed(2)}</p>`;
        output.innerHTML += `<p>Grade: ${grade}</p>`;
    });

    output.innerHTML += `<p>Total Class Average: ${Student.calculateClassAverage().toFixed(2)}</p>`;
}

function addStudent() {
    const studentsDiv = document.getElementById('students') as HTMLDivElement;
    const studentDiv = document.createElement('div');
    studentDiv.classList.add('student');
    studentDiv.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" class="name" required>
        <label for="marks" style="margin-left: 3em;">Marks:</label>
        <input type="text" class="marks" required>
    `;
    studentsDiv.appendChild(studentDiv);
}

const form = document.getElementById('studentForm');
form.addEventListener('submit', handleSubmit);

const addStudentButton = document.getElementById('addStudent');
addStudentButton.addEventListener('click', addStudent);