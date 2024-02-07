const firebaseConfig = {
    apiKey: "AIzaSyCxG8XFdJyl8_03ie317US9uP9LiXMRaSY",
    authDomain: "venkataraghavan11022002.firebaseapp.com",
    databaseURL: "https://venkataraghavan11022002-default-rtdb.firebaseio.com",
    projectId: "venkataraghavan11022002",
    storageBucket: "venkataraghavan11022002.appspot.com",
    messagingSenderId: "905008386506",
    appId: "1:905008386506:web:eb088c974c3fe38953ff33",
    measurementId: "G-WY0DD0P62N"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var mail = getElementVal("mail");
    var mobnum = getElementVal("mobnum");
    var msg = getElementVal("msg");

    if (!name && !mail && !mobnum && !msg) {
        document.querySelector(".alertns").style.display = "block";

        setTimeout(() => {
            document.querySelector(".alertns").style.display = "none";
        }, 3000);
    } else if (!name) {
        document.querySelector(".alertans").style.display = "block";

        setTimeout(() => {
            document.querySelector(".alertans").style.display = "none";
        }, 3000);
    } else if (!mail) {
        document.querySelector(".alertans").style.display = "block";

        setTimeout(() => {
            document.querySelector(".alertans").style.display = "none";
        }, 3000);
    }
    else if (!mobnum) {
        document.querySelector(".alertans").style.display = "block";

        setTimeout(() => {
            document.querySelector(".alertans").style.display = "none";
        }, 3000);
    } else if (!msg) {
        document.querySelector(".alertans").style.display = "block";

        setTimeout(() => {
            document.querySelector(".alertans").style.display = "none";
        }, 3000);
    }
    else {
        //   enable alert
        document.querySelector(".alerts").style.display = "block";

        //   remove the alert
        setTimeout(() => {
            document.querySelector(".alerts").style.display = "none";
        }, 3000);

        saveMessages(name, mail, mobnum, msg);
        //   reset the form
        document.getElementById("contactForm").reset();
    }

}

const saveMessages = (name, mail, mobnum, msg) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        Name: name,
        Mail: mail,
        Mobilenumber: mobnum,
        Message: msg
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};