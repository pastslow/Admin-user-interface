var addFirstName = document.getElementById("addFirstName");
var addSecondName = document.getElementById("addSecondName");
var addGenderM = document.getElementById("addGenderM");
var addGenderF = document.getElementById("addGenderF");
var addAge = document.getElementById("addAge");
var addJobBtnImg = document.getElementById("addJobBtnImg");
var addUserImg = document.getElementById("addUserImg");
var addGender = "male";
var addJob = "another";
// ================= Create a fetch that send a json to backend ============ //
function addNewUserToBackEnd(){
    fetch("http://localhost/addUser.php",{
        method:"POST",
        body: JSON.stringify({
            firstname: addFirstName.value,
            secondname: addSecondName.value,
            gender: addGender,
            job: addJob,
            age: addAge.value,
        })
    }).then(function(){
    $('#modalAdd').modal('hide'); 
    listAgain();
    }).catch(function(){
        alert("Please try again");
    })
}
function changeJobOnAddModal(job){
    addJob = job;
    addJobBtnImg.src = `img/job/${job}.png`;
    addUserImg.src = `img/user/man/${job}.png`;
// =============== Change user image from add new user modal =============== //
    if(addGender == "male"){
    addUserImg.src = `img/user/man/${job}.png`;
    }else{
    addUserImg.src = `img/user/woman/${job}.png`;
    }
// ================= Display user image after job selection ================ //
    $("#addUserValuesContainer").toggle();
    $("#addUserImg").toggle();
    $("#addJobsContainer").toggle();
}
// =================== change gender on add new user modal ================= //
function switchGender(gender){
switch(gender){
    case "male":
    addUserImg.src = `img/user/man/${addJob}.png`;
    break;
    case "female":
    addUserImg.src = `img/user/woman/${addJob}.png`;
    break;
}
addGender = gender;
}
// ===== create a fetch that parse new user into a json to load on page ==== //
function listAgain(){
    fetch("http://localhost/listUsers.php")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        $("#users").empty();
        var myUsers = data;
        loadUsersFromServer(myUsers);
    });
}