var editFirstName = document.getElementById("editFirstName");
var editSecondName = document.getElementById("editSecondName");
var maleEdit = document.getElementById("maleEdit");
var femaleEdit = document.getElementById("femaleEdit");
var editImgId = document.getElementById("editImgId");
var ageEdit = document.getElementById("ageEdit");
var editId = document.getElementById("editId");
var jobBtnImg = document.getElementById("jobBtnImg");
var jobValue = "";
var gender = "";

var currentFirstName;
var currentSecondName;
var currentImg;
var currentGender;
var currentJob;
var currentAge;

function changeValuesOnEditPopUp(userDivId, firstNameId, secondNameId, genderImgId,
    imgId, jobId, userId, ageId){
        var userDivId = document.getElementById(userDivId);
        var firstNameId = document.getElementById(firstNameId);
        var secondNameId = document.getElementById(secondNameId);
        var genderImgId = document.getElementById(genderImgId);
        var imgId = document.getElementById(imgId);
        var jobId = document.getElementById(jobId);
        var userId = document.getElementById(userId);
        var ageId = document.getElementById(ageId);

        editFirstName.value = firstNameId.innerText;
        editSecondName.value = secondNameId.innerText;

        // ================== check radio button by gender ==================//
        if(genderImgId.src == "http://localhost/img/user/male.png"){
            maleEdit.checked = true;
            gender = "male";
        }else{
            femaleEdit.checked = true;
            gender = "female";
        }
        editImgId.src = imgId.src;

        editId.innerText = userId.innerText;
        ageEdit.value = ageId.innerText;
        jobBtnImg.src = `img/job/${jobId.innerText}.png`;
        // ========== A custom job variabile that will be use late ========= //
        jobValue = jobId.innerText;
        // ====================== Curent selections ======================== //
        currentFirstName = firstNameId;
        currentSecondName = secondNameId;
        currentImg = imgId;
        currentGender = genderImgId;
        currentJob = jobId;
        currentAge = ageId;
}
function findJobValue(job){
    // ================= display back image with user and name ============= //
    $("#editImgId").toggle();
    $("#userValuesContainer").toggle();
    $("#jobsContainer").toggle();
    // ============================ buton job image ======================== //
    jobBtnImg.src = `img/job/${job}.png`;

    jobValue = job;
    //  =============== change user image by select a new job ============== //
    if(gender == "male"){
        editImgId.src = `img/user/man/${job}.png`;
    }else{
        editImgId.src = `img/user/woman/${job}.png`;
    }
}
// ================= change user image when you change gender ============== //
function editGender(gen){
    switch(gen){
        case "male":
        editImgId.src = `img/user/man/${jobValue}.png`;
        break;
        case "female":
        editImgId.src = `img/user/woman/${jobValue}.png`;   
        break;   
    }
    gender = gen;
}
// ===================== Make changes visibile on webpage ================== //
function editValuesOnHtml(){
    currentFirstName.innerText = editFirstName.value;
    currentSecondName.innerText = editSecondName.value;
    currentImg.src = editImgId.src;
    if(maleEdit.checked == true){
        currentGender.src = "img/user/male.png";
    }else{
        currentGender.src = "img/user/female.png";
    }
    currentJob.innerText = jobValue;
    currentAge.innerText = ageEdit.value;
}
// ================= create a fetch that send an jason to backend ========== //
function sendEditUserData(){
  fetch("http://localhost/edit.php",{
      method:"PUT",
      body: JSON.stringify({
          id: editId.innerText,
          firstname: editFirstName.value,
          secondname: editSecondName.value,
          job: jobValue,
          gender: gender,
          age: ageEdit.value,
      })
  }).then(function(){
    editValuesOnHtml();
    $('#modalEdit').modal('hide');    
  }).catch(function(){
      alert("Please try again.")
  })
}