function skillsMember() {
    var skills = document.getElementById("skills").value;
    if (skills == "") {
        document.getElementById("skillsError").innerHTML = "Please enter your skills";
        return false;
    }
    else {
        document.getElementById("skillsError").innerHTML = "";
        return true;
    }
}