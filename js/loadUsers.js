var users = document.getElementById("users");
var elem = "";
var i;

var userObject = [
   {
        lastName:"Ciubotariu",
        firstName:"Robert",
        Gender:"Male",
        age:23,
        job:'engineer',
    },
    {
        lastName:"Ciocan",
        firstName:"Alin",
        Gender:"Male",
        age:20,
        job:'police',
    },
    {
        lastName:"Alun",
        firstName:"Andreea",
        Gender:"Female",
        age:30,
        job:'lawyer',
    },
    {
        lastName:"Nichifor",
        firstName:"Monica",
        Gender:"Female",
        age:23,
        job:'lawyer',
    },
    {
        lastName:"Andrusca",
        firstName:"Emil",
        Gender:"Male",
        age:34,
        job:'police',
    },
    {
        lastName:"Acatrinei",
        firstName:"Amalia",
        Gender:"Female",
        age:21,
        job:'police',
    },
]

function loadUsersFromServer(){
    for ( i = 0; i < userObject.length; i++) {
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
        elem += `<span>${userObject[i].firstName}&nbsp</span>`;
        elem += `<span>${userObject[i].lastName}&nbsp</span>`;
        elem += `<img class="img-18" src="img/user/${userObject[i].Gender}.png" alt="error" />`;
        elem += `</div>`;
        //========================== Remove btn =============================//
        elem += `<div>`;
        elem += `<span class="mouse-over glyphicon glyphicon-remove"></span>`;
        elem += `</div>`;
        elem += `</div>`;
        // ========================= User image =============================//
        elem += `<div class="m-15">`;
            if(userObject[i].Gender == "Male"){
            elem += `<img class="img-responsive" src="img/user/man/${userObject[i].job}.png" alt="error" />`;
        }else{
            elem += `<img class="img-responsive" src="img/user/woman/${userObject[i].job}.png" alt="error" />`;
        }
            elem += `</div>`;
        //========================== Job and Age ============================//
        elem += `<div class="d-flex just-evently border-top">`;
        elem += `<span class="font-bold">Job: </span>`;
        elem += `<span>${userObject[i].job} </span>`;
        elem += `<span class="font-bold">Age: </span>`;
        elem += `<span>${userObject[i].age} </span>`
        elem += `</div>`;
        //===================== End of user container =======================//
        elem += `</div>`;
    }
    users.innerHTML = elem;
}