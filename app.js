  function clearTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
}



function addStudentToTable(studentName,studentDate,studentGender,studentPhoneNumber,studentGrade){
    var tableBody= document.getElementById("tableBody");
    var newRow=document.createElement('tr');
    newRow.innerHTML=`
   <td>${studentName}</td>
   <td>${studentDate}</td>
   <td>${studentGender}</td>
   <td>${studentPhoneNumber}</td>
   <td>${studentGrade}</td>
    `;
tableBody.appendChild(newRow);
}


var studentForm=document.getElementById("studentForm");
studentForm.addEventListener('submit',function(e){ 
   
    e.preventDefault();

    //Handle the form values 
var nameInput=document.getElementById("name");
var dateInput=document.getElementById("date-of-birth");
var genderInput=document.getElementById("gender");
var phoneNumberInput=document.getElementById("phoneNumber");
var gradeInput=document.getElementById("grade");

    var studentName = nameInput.value;
    var studentDate= dateInput.value;
    var studentGender = genderInput.value;
    var studentPhoneNumber = phoneNumberInput.value;
    var studentGrade = gradeInput.value;
  
   
if(typeof(Storage)!=="undefined"){ 
    if(studentName!=="" && studentDate !==""  && studentGender !=="" && studentPhoneNumber !=="" && studentGrade!==""){ 
     // Retrieve existing student data from local storage
    let studentData = JSON.parse(localStorage.getItem('students')) || [];

  var newStudent={
    Name :studentName ,
    dateOfBirth : studentDate ,
    gender: studentGender,
    phoneNumber:studentPhoneNumber,
    grade:studentGrade};
    
studentData.push(newStudent);
localStorage.setItem('students',JSON.stringify(studentData));

studentData.forEach(student=>{
       addStudentToTable(student.Name, student.dateOfBirth,student.gender,student.phoneNumber, student.grade);
        nameInput.value= '';
        dateInput.value='';
        genderInput.value='';
        phoneNumberInput.value='';
        gradeInput.value = '';

        });
    }else{
        alert("you need to fill all the feilds ");
    }
}else{
    alert('Local storage is not supported in this browser. Data will not be saved.');
}

});



 //Load existing student data from local storage on page load
window.addEventListener('load', function () {
   const studentData = JSON.parse(localStorage.getItem('students')) || [];
   studentData.forEach(student =>  {
       addStudentToTable(student.Name, student.dateOfBirth,student.gender,student.phoneNumber, student.grade);
      
   });});



// *********************************************************************************


// class Student {
//     constructor(fullName, dateOfBirth, gender, major, imageUrl, phoneNumber) {
//         this.fullName = fullName;
//         this.dateOfBirth = dateOfBirth;
//         this.gender = gender;
//         this.major = major;
//         this.imageUrl = imageUrl;
//         this.phoneNumber = phoneNumber;
//     }
// }

// const students = [];

// // Function to add a new student
// function addStudent(event) {
//     event.preventDefault();

//     // Get values from the form
//     const fullName = document.getElementById("fullName").value;
//     const dateOfBirth = document.getElementById("dateOfBirth").value;
//     const gender = document.getElementById("gender").value;
//     const major = document.getElementById("major").value;
//     const imageUploadInput = document.getElementById("imageUrl");
//     const imageUrl = URL.createObjectURL(imageUploadInput.files[0]);
//     const phoneNumber = document.getElementById("phoneNumber").value;

//     // Create a new student object
//     const newStudent = new Student(fullName, dateOfBirth, gender, major, imageUrl, phoneNumber);

//     // Add the new student to the students array
//     students.push(newStudent);

//     // Clear the form
//     document.getElementById("studentForm").reset();

//     // Call the render function to update the student cards
//     renderStudents();

//     // Save students to local storage
//     saveStudentsToLocalStorage();
// }

// // Render student cards on the home page
// function renderStudents() {
//     const mainContent = document.getElementById("main-content");

//     // Clear the existing student cards
//     mainContent.innerHTML = "";

//     students.forEach(student => {
//         const card = document.createElement("div");
//         card.classList.add("student-card");

//         // Create HTML structure for the student card
//         card.innerHTML = `
//             <img src="${student.imageUrl}" alt="${student.fullName}" height="200" width="200">
//             <h2>${student.fullName}</h2>
//             <p><strong>Date of Birth:</strong> ${student.dateOfBirth}</p>
//             <p><strong>Gender:</strong> ${student.gender}</p>
//             <p><strong>Major:</strong> ${student.major}</p>
//             <p><strong>Phone Number:</strong> ${student.phoneNumber}</p>
//         `;

//         mainContent.appendChild(card);
//     });
// }

// // Save students to local storage
// function saveStudentsToLocalStorage() {
//     localStorage.setItem("students", JSON.stringify(students));
// }

// // Load students from local storage (you can call this function if needed)
// function loadStudentsFromLocalStorage() {
//     const storedStudents = JSON.parse(localStorage.getItem("students"));
//     if (storedStudents) {
//         students.length = 0; // Clear the existing students array
//         students.push(...storedStudents); // Add the stored students to the array
//     }
// }

// // Call the load function to load students from local storage
// loadStudentsFromLocalStorage();

// // Call the render function to display students
// renderStudents();

// // Add event listener to the form
// document.getElementById("studentForm").addEventListener("submit", addStudent);















