const arr = [73, 67, 38, 33]

function gradingStudents(grades) {
    let finalGrades = []
    grades.forEach ((grade) =>{
        if (grade < 38){
            finalGrades.push(grade);
        }
        else if (5 - (grade % 5) < 3 ){
            finalGrades.push(grade + (5 - (grade % 5)))
        }
        else{
            finalGrades.push(grade);
        }
    })
    return finalGrades;
}

gradingStudents(arr);