let oddnum = "";

for (let a = 0; a < 10; a++) {
    if (a % 2 !== 0) {
        console.log("Odd number: ", a);
        oddnum += a + "<br>";
    }
}

document.getElementById("odd").innerHTML = oddnum;


function calculateGrade(score) {
    let marks = document.getElementById("marks").value;
    let grade = "";

    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }
    document.getElementById("grade").innerHTML = "Your Grade is: <strong>" + grade + "</strong>";

}

