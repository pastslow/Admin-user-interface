var users = document.getElementById("users");
var elem = "";
var i;
// =============== create a fetch that parse data into a jason ==============//
fetch("http://localhost/listUsers.php")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var myUsers = data;
        loadUsersFromServer(myUsers);
    });

function loadUsersFromServer(myUsers) {
    for (i = 0; i < myUsers.length; i++) {
        //========================= User Container ==========================//
        elem += `<div class="col-xs-12 col-sm-4 col-md-3 col-lg-2 user-table" id="userDivId${[i]}">`;
        //=========== Container for values of user and buttons ==============//
        elem += `<div class="d-flex just-evently border-bottom">`;
        //=========================== Edit btn ==============================//
        elem += `<div>`;
        elem += `<span class="mouse-over glyphicon glyphicon-pencil"></span>`;
        elem += `</div>`;
        //============== First name, second name and gender =================//
        elem += `<div class="d-flex font-bold">`;
        elem += `<span id="firstNameId${i}">${myUsers[i].firstname}&nbsp</span>`;
        elem += `<span id="secondNameId${i}">${myUsers[i].secondname}&nbsp</span>`;
        elem += `<img id="genderImgId${i}"
        class="img-18"
        src="img/user/${myUsers[i].gender}.png" 
        alt="error" />`;
        elem += `</div>`;
        //========================== Remove btn =============================//
        elem += `<div>`;
        elem += `<span data-toggle="modal"
        onclick ="deleteContent('userDivId${[i]}','firstNameId${i}',
            'secondNameId${i}', 'genderImgId${i}', 'imgId${i}', 'jobId${i}', 
            'userId${i}', 'ageId${i}')"
        data-target="#modalDelete"
        class="mouse-over glyphicon glyphicon-remove">
        </span>`;
        elem += `</div>`;
        elem += `</div>`;
        // ========================= User image =============================//
        elem += `<div class="m-15">`;
        if (myUsers[i].gender == "male") {
            elem += `<img id="imgId${i}"
            class="img-responsive"
            src="img/user/man/${myUsers[i].job}.png"
            alt="error" />`;
        } else {
            elem += `<img id="imgId${i}"
            class="img-responsive"
            src="img/user/woman/${myUsers[i].job}.png"
            alt="error" />`;
        }
        elem += `</div>`;
        //========================== Job Id Age =============================//
        elem += `<div class="d-flex just-evently border-top">`;
        elem += `<span class="font-bold">Job: </span>`;
        elem += `<span id="jobId${i}">${myUsers[i].job} </span>`;
        elem += `<span class="font-bold">Id: </span>`;
        elem += `<span id="userId${i}">${myUsers[i].id} </span>`;
        elem += `<span class="font-bold">Age: </span>`;
        elem += `<span id="ageId${i}">${myUsers[i].age} </span>`
        elem += `</div>`;
        //===================== End of user container =======================//
        elem += `</div>`;
    }
    users.innerHTML = elem;
}