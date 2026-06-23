function calculateGrades() {

    let n = parseInt(document.getElementById("numStudents").value);

    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid number of students");
        return;
    }

    let output = `
    <table>
        <tr>
            <th>Student</th>
            <th>Total</th>
            <th>Average</th>
            <th>Grade</th>
            <th>Result</th>
        </tr>
    `;

    for (let i = 1; i <= n; i++) {

        let m1 = Number(prompt(`Enter Student ${i} Subject 1 Marks:`));
        let m2 = Number(prompt(`Enter Student ${i} Subject 2 Marks:`));
        let m3 = Number(prompt(`Enter Student ${i} Subject 3 Marks:`));

        let total = m1 + m2 + m3;
        let average = total / 3;

        let grade;

        if (average >= 90) {
            grade = "A";
        }
        else if (average >= 75) {
            grade = "B";
        }
        else if (average >= 60) {
            grade = "C";
        }
        else if (average >= 40) {
            grade = "D";
        }
        else {
            grade = "F";
        }

        let result = average >= 40 ? "Pass" : "Fail";

        output += `
        <tr>
            <td>${i}</td>
            <td>${total}</td>
            <td>${average.toFixed(2)}</td>
            <td>${grade}</td>
            <td>${result}</td>
        </tr>
        `;
    }

    output += "</table>";

    document.getElementById("result").innerHTML = output;
}