/*global chrome*/
//Capture submit button
document.getElementById("addContact").addEventListener("click",function() {
    var fname = document.getElementById("fname").value;
    // chrome.storage.local.set({ fname });
    //alert(chrome.storage.local.get(fname));
    var lname = document.getElementById("lname").value;
    //  chrome.storage.local.set({ lname });
    var company = document.getElementById("company").value;
    //  chrome.storage.local.set({ company });
    var title = document.getElementById("title").value;
//    chrome.storage.local.set({ title });
    // alert(fname + " " + lname + " " + company + " " + title);
    //Get contact status
    var contactStatus;
    var contactstatus = document.getElementsByName('contact status');

    for (let i = 0; i < contactstatus.length; i++) {
        if (contactstatus[i].checked) {
            contactStatus = document.getElementById(contactstatus[i].id).value;
        }
    }
    //   chrome.storage.local.set({ contactStatus });
    //   alert(contactStatus);
    //Store mode of contact
    var contactMode;
    var contactmode = document.getElementsByName('contactmode');

    for (let i = 0; i < contactmode.length; i++) {
        if (contactmode[i].checked) {
            contactMode = document.getElementById(contactmode[i].id).value;
        }
    }
    //  chrome.storage.local.set({ contactMode });
    //  alert(contactMode)
    //handler(fname);
    chrome.runtime.sendMessage({
        action: 'launchAirTable',
        firstname: fname,
        lastname: lname,
        company: company,
        title: title,
        contactStatus: contactStatus,
        contactMode: contactMode
    })
})
//let button = document.getElementById('addContact')
//function handler(){
//    chrome.runtime.sendMessage({
//        action: 'launchAirTable',
//        firstname: fname

//    })
//}




