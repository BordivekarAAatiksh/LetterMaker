function letter_preview(){

    var letter_preview = document.getElementById("letter-preview");

    var letter_date = document.getElementById("date").value;
    var receiver_name = document.getElementById("receiver_name").value;
    var receiver_address = document.getElementById("receiver_address").value;
    var letter_subject = document.getElementById("subject").value;
    var disease = document.getElementById("disease").value;
    var leave_days = document.getElementById("days").value;
    var ask_days = document.getElementById("ask_days").value;
    var leave_date = document.getElementById("leave_date").value;
    var sender_name = document.getElementById("sender-name").value;
    
    var letter_date_preview = document.getElementById("date-preview");
    var receiver_name_preview = document.getElementById("receiver-name-preview");
    var receiver_address_preview = document.getElementById("receiver-address-preview");
    var letter_subject_preview = document.getElementById("subject-preview");
    var disease_preview = document.getElementById("disease-preview");
    var leave_days_preview = document.getElementById("days-preview");
    var leave_date_preview = document.getElementById("leave-date-preview");
    var ask_days_preview = document.getElementById("ask-days-preview");
    var sender_name_preview = document.getElementById("sender-name-preview");

    letter_preview.style.display = "block";

    letter_date_preview.innerText += " " + letter_date;
    receiver_name_preview.innerText += " " + receiver_name;
    receiver_address_preview.innerText += " " + receiver_address;
    letter_subject_preview.innerText += " " + letter_subject;
    disease_preview.innerText += " " + disease;
    leave_days_preview.innerText += " " + leave_days;
    leave_date_preview.innerText += " " + leave_date;
    ask_days_preview.innerText += " " + ask_days;
    sender_name_preview.innerText += " " + sender_name;

    domtoimage.toPng(letter_preview).then(function(dataURL){

        var sick_leave_img = document.getElementById("sick-leave-img");

        sick_leave_img.download = "sick-leave.png";
        sick_leave_img.href = dataURL;

        sick_leave_img.click();

    })

}