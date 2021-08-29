/*global chrome*/
//import Airtable from "airtable";
chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
    //alert("hi");
    if (request.action === 'launchAirTable') {
        alert("hi");

        let fname = "Akash"//document.getElementById("fname").value;
        alert(fname);
        let lname = "Mandavilli"//document.getElementById("lname").value;
        let company = "Rex"//document.getElementById("company").value;
        let title = "CEO"//document.getElementById("title").value;
        // alert(fname + " " + lname + " " + company + " " + title);
        //Get contact status
        let contactStatus = "Reached Out";
     //   let contactstatus = document.getElementsByName('contact status');

      //  for (let i = 0; i < contactstatus.length; i++) {
     //       if (contactstatus[i].checked) {
       //         contactStatus = document.getElementById(contactstatus[i].id).value;
    //        }
    //    }
        //   alert(contactStatus);
        //Store mode of contact
        let contactMode = "LinkedIn";
     //   var contactmode = document.getElementsByName('contactmode');

    //    for (let i = 0; i < contactmode.length; i++) {
    //        if (contactmode[i].checked) {
    //            contactMode = document.getElementById(contactmode[i].id).value;
    //        }
    //    }
       //const Airtable = require('airtable');
        const base = new Airtable({apiKey: '<keyo3cFjinZv8ziCe>'}).base(
            'appBrHVddsAPjVnXh'
        );

        const table = base('Table 1');
        console.log("Reached");
        base('Table 1').create([{

                "fields": {
                    "First Name": fname,
                    "Last Name": lname,
                    "Company": company,
                    "Job Title": title,
                    "Mode of Contact": contactMode,
                    "Connection Status": contactStatus
                }
            }
            ]

            , {typecast: true}, function (err, records) {
                if (err) {
                    console.error(err);
                    return;
                }
                records.forEach(function (record) {
                    console.log(record.getId());
                });
            });
    }
        })
