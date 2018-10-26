
<!-- =============================  Edit Modal ============================ -->
<div id="modalAdd" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header text-center">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title text-success">Do you want to add new user ?</h4>
      </div>
      <div class="modal-body d-flex just-center">
        <!-- ===================== User container ========================= -->
        <div class="del-user-container">
        <!-- ============== Container for values of user ================== -->
        <div id="addUserValuesContainer">
            <div class="d-flex just-evently">
                <input placeholder="First Name" class="input" id="addFirstName" type="text">
                <input placeholder="Second Name" class="input" id="addSecondName" type="text">
            </div>
            <div class="d-flex just-evently">
                <div>
                    <input onclick="switchGender('male')" 
                    id="addGenderM" checked class="cursor" type="radio" name="gender">
                    Male
                </div>
                <div>
                    <input onclick="switchGender('female')" 
                    id="addGenderF" class="cursor" type="radio" name="gender">
                    Female
                </div>
            </div>
        </div>
        <!-- ====================== User image ============================ -->
        <div class="m-15">
        <img id="addUserImg" class="img-responsive" src="img/user/man/man.png" alt="error" />
        </div>

        <!-- ================== Select job container======================= -->
        <div id="addJobsContainer" class="d-none">
            <div class="d-flex just-evently">
                <div>
                    <h4 class="text-center">Select job:</h4>
                </div>
                <div>
                    <button id="addRemoveBtn" class="remove-btn">
                        <h4 class="glyphicon glyphicon-remove"></h4>
                    </button>
                </div>
            </div>
        <div class="d-flex just-between text-center flex-wrap">
        <div class="job-div" onclick="changeJobOnAddModal('police')">
            <div>
                <span>Police</span>
            </div>
            <div>
                <img class="img-job2" src="img/job/police.png" alt="">
            </div>
        </div>

        <div class="job-div" onclick="changeJobOnAddModal('firefighter')">
            <div>
                <span>FireFighter</span>
            </div>
            <div>
                <img class="img-job2" src="img/job/firefighter.png" alt="">
            </div>
        </div>

        <div class="job-div" onclick="changeJobOnAddModal('lawyer')">
            <div>
                <span>Lawyer</span>
            </div>
            <div>
                <img class="img-job2" src="img/job/lawyer.png" alt="">
            </div>
        </div>

        <div class="job-div" onclick="changeJobOnAddModal('worker')">
            <div>
                <span>Worker</span>
            </div>
            <div>
                <img class="img-job2" src="img/job/worker.png" alt="">
            </div>
        </div>

        <div class="job-div" onclick="changeJobOnAddModal('driver')">
            <div>
                <span>Driver</span>
            </div>
            <div>
                <img class="img-job2" src="img/job/driver.png" alt="">
            </div>
        </div>

        <div class="job-div" onclick="changeJobOnAddModal('doctor')">
            <div>
                <span>Doctor</span>
            </div>
            <div>
                <img class="img-job2" src="img/job/doctor.png" alt="">
            </div>
        </div>

        <div class="job-div" onclick="changeJobOnAddModal('student')">
            <div>
                <span>Student</span>
            </div>
            <div>
                <img class="img-job2" src="img/job/student.png" alt="">
            </div>
        </div>

        <div class="job-div" onclick="changeJobOnAddModal('engineer')">
            <div>
                <span>Engineer</span>
            </div>
            <div>
                <img class="img-job2" src="img/job/engineer.png" alt="">
            </div>
        </div>

        <div class="job-div" onclick="changeJobOnAddModal('another')">
            <div>
                <span>Another</span>
            </div>
            <div>
                <img class="img-job2" src="img/job/another.png" alt="">
            </div>
        </div>
        
        
        </div>
  
        
        </div>
        <!-- ====================== Job Id Age ============================ -->
        <div class="d-flex just-evently border-top">
        <div>
        <button id="addJobBtn" class="job-btn font-bold">Job:
        <img id="addJobBtnImg" class="img-job" src="img/job/another.png" alt="">
        </button>
        </div>
        <span class="font-bold">Age: </span>
        <input id="addAge" class="age-input" type="text" name="" placeholder="16">
        </div>
        <!-- ================ End of user container ======================= -->
        </div>
      </div>
      
      <div class="modal-footer d-flex just-evently">
          <h4 class="text-success">Add new user have permanet effects!</h4>
        <button type="button" onclick="addNewUserToBackEnd()" class="btn btn-default">Yes</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
      </div>
    </div>

  </div>
</div>
