const ReadlineSync = require(`readline-sync`);
const ShowStudents = require(`./show_list_students`)

const registerStudents = () => {
    const numberStudents = ReadlineSync.question(`Number of Students: `);
    const Students = [];

    for (let i = 0; i < numberStudents; i++){
        const NameStudent = ReadlineSync.question(`Name of student ${i}: `);
        const AgeStudent = ReadlineSync.question(`Age of student ${NameStudent}: `);
        const Student = {
            NameStudent,
            AgeStudent
        };
        Students.push(Student);
    }
    ShowStudents(Students);
}


//Inicio de registro de estudiantes
registerStudents();