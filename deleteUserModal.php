<!-- Modal -->
<div id="modalDelete" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header text-center">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title text-danger">Are you sure of deleting this user ?</h4>
      </div>
      <div class="modal-body d-flex just-center">
        <!-- ===================== User container ========================= -->
        <div class="del-user-container">
        <!-- ============== Container for values of user ================== -->
        <div class="d-flex just-evently border-bottom">
        <span id="delFirstNameId" class="font-bold">AAAAA</span>
        <span id="delSecondNameId" class="font-bold">BBBBBB</span>
        <img id="delGenderId" class="img-18" alt="" />
        </div>
        <!-- ====================== User image ============================ -->
        <div class="m-15">
        <img id="delImgId" class="img-responsive" src="img/user/man/man.png" alt="error" />
        </div>
        <!-- ====================== Job Id Age ============================ -->
        <div class="d-flex just-evently border-top">
        <span class="font-bold">Job: </span>
        <span id="delJobId">engineer</span>
        <span class="font-bold">Id: </span>
        <span id="delId">22</span>
        <span class="font-bold">Age: </span>
        <span id="delAge">33</span>
        </div>
        <!-- ================ End of user container ======================= -->
        </div>
      </div>
      
      <div class="modal-footer d-flex just-evently">
          <h4 class="text-danger">Delete action will be permanent!</h4>
        <button id="btnYes" onclick="sendDeletedUserToBackEnd(divId, delId.innerText)" type="button" class="btn btn-default">Yes</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
      </div>
    </div>

  </div>
</div>