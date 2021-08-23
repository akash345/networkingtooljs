//Capture submit button
document.getElementById("addContact").addEventListener("click",function() {
    let fname = document.getElementById("fname").value;
  //  alert(fname);
    let lname = document.getElementById("lname").value;
    let company = document.getElementById("company").value;
    let title = document.getElementById("title").value;
   // alert(fname + " " + lname + " " + company + " " + title);
   //Get contact status
    let contactStatus;
    let contactstatus = document.getElementsByName('contact status');

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
  //  alert(contactMode)
    const Airtable = require('airtable');
    const base = new Airtable({ apiKey: '<keyo3cFjinZv8ziCe>' }).base(
        'appBrHVddsAPjVnXh'
    );

    const table = base('Table 1');
    base('Table 1').create([{

            "fields": {
                "First Name": fname,
                "Last Name": lname,
                "Company": company,
                "Job Title": title,
                "Mode of Contact": contactMode,
                "Connection Status": contactStatus
            }}
        ]

    , {typecast: true}, function(err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records.forEach(function (record) {
            console.log(record.getId());
        });
    });
})


