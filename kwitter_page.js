var firebaseConfig = {
    apiKey: "AIzaSyC2dIUPJpmzGgF0jxs8AJQnVtNiDNyy5sE",
    authDomain: "kwitter-3c12f.firebaseapp.com",
    databaseURL: "https://kwitter-3c12f-default-rtdb.firebaseio.com",
    projectId: "kwitter-3c12f",
    storageBucket: "kwitter-3c12f.appspot.com",
    messagingSenderId: "297280768013",
    appId: "1:297280768013:web:4467de5b5cf4269f8e2d44"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code

                      //End code
                }
          });
    });
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send(){
    var message = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:message,
          like:0
    });
    document.getElementById("msg").value = "";
    console.log(message);
}