const ShowStudents = (Students) => {
    console.log (`List of register students: `);
    Students.forEach(Student => {
        console.log(`Name of student: ${Student.NameStudent}, Age of student: ${Student.AgeStudent}`);
    });
};

module.exports = {ShowStudents};