function calculateGrade() {
   var userInput = prompt("Enter student marks (between 0 and 100):");
   var marks = parseFloat(userInput);

   while (isNaN(marks) || marks < 0 || marks > 100) {
       alert("Invalid input. Please enter a number between 0 and 100.");
       userInput = prompt("Enter student marks (between 0 and 100):");
       marks = parseFloat(userInput);
   }

   var grade;

   if (marks >= 80) {
       grade = 'A';
   } else if (marks >= 60) {
       grade = 'B';
   } else if (marks >= 50) {
       grade = 'C';
   } else if (marks >= 40) {
       grade = 'D';
   } else {
       grade = 'E';
   }

   alert("Student grade: " + grade);
}

// Call the function
calculateGrade();
