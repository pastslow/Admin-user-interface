var editImgId = document.getElementById("editImgId");
var jobsContainer = document.getElementById("jobsContainer");
// =================== Toggle jobs for edit user modal ===================== //
$("#jobBtn").click(function(){
    $("#editImgId").toggle();
    $("#userValuesContainer").toggle();
    $("#jobsContainer").toggle();
});

$("#removeBtn").click(function(){
    $("#editImgId").toggle();
    $("#userValuesContainer").toggle();
    $("#jobsContainer").toggle();
});
// =================== Toggle jobs for add new user modal ================== //
$("#addJobBtn").click(function(){
    $("#addUserValuesContainer").toggle();
    $("#addUserImg").toggle();
    $("#addJobsContainer").toggle();
});


$("#addRemoveBtn").click(function(){
    $("#addUserValuesContainer").toggle();
    $("#addUserImg").toggle();
    $("#addJobsContainer").toggle();
});