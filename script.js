function generatecv() {
    // Fetching input values from the form
    var name = document.getElementById("namefield").value;
    var email = document.getElementById("Email").value;
    var contact = document.getElementById("contactfield").value;
    var address = document.getElementById("addressfield").value;
    var dob = document.getElementById("dob").value;
    var education = document.getElementById("educationfield").value;
    var experience = document.getElementById("wefield").value;
    var skills = document.getElementById("skillsfield").value;
    var projects = document.getElementById("projectsfield").value;

    // Setting values in the CV template
    document.getElementById("nameT1").innerText = name;
    document.getElementById("nameT2").innerText = name;
    document.getElementById("emailT").innerText = "Email: " + email;
    document.getElementById("contactT").innerText = "Contact: " + contact;
    document.getElementById("addressT").innerText = "Address: " + address;
    document.getElementById("dobT").innerText = "DOB: " + dob;

    document.getElementById("objectiveT").innerText = ""; // Set your objective here

    // Splitting multiline strings and creating list items
    var educationList = education.split("\n").map(item => "<li>" + item + "</li>").join("");
    document.getElementById("EducationT").innerHTML = educationList;

    var experienceList = experience.split("\n").map(item => "<li>" + item + "</li>").join("");
    document.getElementById("work experienceT").innerHTML = experienceList;

    var skillsList = skills.split("\n").map(item => "<li>" + item + "</li>").join("");
    document.getElementById("skillsT").innerHTML = skillsList;

    var projectsList = projects.split("\n").map(item => "<li>" + item + "</li>").join("");
    document.getElementById("projectsT").innerHTML = projectsList;


    let file=document.getElementById("imgfield").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloaded = function(){
    document.getElementById("imgTemplate").src = reader.result;
    };
    // Showing the CV template
    document.getElementById("cv-template").style.display = "block";
}

function printcv() {
    // Printing the CV template
    window.print();
}