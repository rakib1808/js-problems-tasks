//marks grading system//
const mark = 90;

function getGrade (mark) {
    if (mark >= 80 && mark <= 100){
        return "A+";
    }

    else if (mark >= 70 && mark <= 79){
        return "A";
    }

}
console.log(getGrade(mark));