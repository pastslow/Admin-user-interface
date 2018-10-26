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
        debugger
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
    fetch("http://localhost/newUser.php")
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        var myUsers = data;
        addNewUser(myUsers[0]);
    })
}

// TODO: receive a simgle user her
function addNewUser(myUser) {
    var elem = "";
        //========================= User Container ==========================//
        elem += `<div class="col-xs-12 col-sm-4 col-md-3 col-lg-2 user-table"
         id="userDivId${[myUser.id]}">`;
        //=========== Container for values of user and buttons ==============//
        elem += `<div class="d-flex just-evently border-bottom">`;
        //=========================== Edit btn ==============================//
        elem += `<div>`;
        elem += `<span  data-toggle="modal" data-target="#modalEdit"
         class="mouse-over glyphicon glyphicon-pencil"
         onclick="changeValuesOnEditPopUp('userDivId${[myUser.id]}','firstNameId${myUser.id}',
         'secondNameId${myUser.id}', 'genderImgId${myUser.id}', 'imgId${myUser.id}', 'jobId${myUser.id}', 
         'userId${myUser.id}', 'ageId${myUser.id}')">
         </span>`;
        elem += `</div>`;
        //============== First name, second name and gender =================//
        elem += `<div class="d-flex font-bold">`;
        elem += `<span class="margin-right-4" id="firstNameId${myUser.id}">
        ${myUser.firstname}</span>`;
        elem += `<span class="margin-right-4" id="secondNameId${myUser.id}">
        ${myUser.secondname}</span>`;
        elem += `<img id="genderImgId${myUser.id}"
        class="img-18"
        src="img/user/${myUser.gender}.png" 
        alt="error" />`;
        elem += `</div>`;
        //========================== Remove btn =============================//
        elem += `<div>`;
        elem += `<span onclick ="deleteContent('userDivId${[myUser.id]}','firstNameId${myUser.id}',
            'secondNameId${myUser.id}', 'genderImgId${myUser.id}', 'imgId${myUser.id}', 'jobId${myUser.id}', 
            'userId${myUser.id}', 'ageId${myUser.id}')"
            data-toggle="modal"
        data-target="#modalDelete"
        class="mouse-over glyphicon glyphicon-remove">
        </span>`;
        elem += `</div>`;
        elem += `</div>`;
        // ========================= User image =============================//
        elem += `<div class="m-15">`;
        if (myUser.gender == "male") {
            elem += `<img id="imgId${myUser.id}"
            class="img-responsive"
            src="img/user/man/${myUser.job}.png"
            alt="error" />`;
        } else {
            elem += `<img id="imgId${myUser.id}"
            class="img-responsive"
            src="img/user/woman/${myUser.job}.png"
            alt="error" />`;
        }
        elem += `</div>`;
        //========================== Job Id Age =============================//
        elem += `<div class="d-flex just-evently border-top">`;
        elem += `<span class="font-bold">Job: </span>`;
        elem += `<span id="jobId${myUser.id}">${myUser.job} </span>`;
        elem += `<span class="font-bold">Id: </span>`;
        elem += `<span id="userId${myUser.id}">${myUser.id} </span>`;
        elem += `<span class="font-bold">Age: </span>`;
        elem += `<span id="ageId${myUser.id}">${myUser.age} </span>`
        elem += `</div>`;
        //===================== End of user container =======================//
        elem += `</div>`;
    users.innerHTML += elem;
}