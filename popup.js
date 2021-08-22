//Capture submit button
document.getElementById("addContact").addEventListener("click",function() {
    var fname = document.getElementById("fname").value;
  //  alert(fname);
    var lname = document.getElementById("lname").value;
    var company = document.getElementById("company").value;
    var title = document.getElementById("title").value;
   // alert(fname + " " + lname + " " + company + " " + title);
   //Get contact status
    var contactStatus;
    var contactstatus = document.getElementsByName('contact status');

    for(let i = 0; i < contactstatus.length; i++) {
        if(contactstatus[i].checked)
        {
          contactStatus = document.getElementById(contactstatus[i].id).value;
        }
    }
 //   alert(contactStatus);
    //Store mode of contact
    var contactMode;
    var contactmode = document.getElementsByName('contactmode');

    for(let i = 0; i < contactmode.length; i++) {
        if(contactmode[i].checked)
        {
            contactMode = document.getElementById(contactmode[i].id).value;
        }
    }
    alert(contactMode)
})
