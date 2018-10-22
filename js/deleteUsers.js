var delFirstNameId = document.getElementById("delFirstNameId");
var delSecondNameId = document.getElementById("delSecondNameId");
var delGenderId = document.getElementById("delGenderId");
var delImgId = document.getElementById("delImgId");
var delJobId = document.getElementById("delJobId");
var delId = document.getElementById("delId");
var delAge = document.getElementById("delAge");
var delBtnYes = document.getElementById("delBtnYes");
var btnYes = document.getElementById("btnYes");


function sendDeletedUserToBackEnd(userDivId, userId){
    var userDivId = document.getElementById(userDivId);

    fetch("http://localhost/delete.php",{
        method: "Delete",
        body: JSON.stringify({id:userId})
    }).then(function(){
        userDivId.style.display = "none";
        $('#modalDelete').modal('hide');
    })
    .catch(function(){
        alert("Error please try again!");
    })

}

var divId ="";

function deleteContent(userDivId, firstNameId, secondNameId, genderImgId,
    imgId, jobId, userId, ageId) {
    var userDivId = document.getElementById(userDivId);
    var firstNameId = document.getElementById(firstNameId);
    var secondNameId = document.getElementById(secondNameId);
    var genderImgId = document.getElementById(genderImgId);
    var imgId = document.getElementById(imgId);
    var jobId = document.getElementById(jobId);
    var userId = document.getElementById(userId);
    var ageId = document.getElementById(ageId);

    delFirstNameId.innerText = firstNameId.innerText;
    delSecondNameId.innerText = secondNameId.innerText;
    delGenderId.src = genderImgId.src;
    delImgId.src = imgId.src;
    delJobId.innerText = jobId.innerText;
    delId.innerText = userId.innerText;
    delAge.innerText = ageId.innerText;
    divId = userDivId.id;
}