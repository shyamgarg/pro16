var firebaseConfig = {
    apiKey: "AIzaSyD695KyTNOULL4NbctgZYA04jxuFQRCnlc",
    authDomain: "pro92-e2eaa.firebaseapp.com",
    databaseURL: "https://pro92-e2eaa-default-rtdb.firebaseio.com",
    projectId: "pro92-e2eaa",
    storageBucket: "pro92-e2eaa.appspot.com",
    messagingSenderId: "136107117498",
    appId: "1:136107117498:web:f7020a4ffdbc24f7862b83",
   
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";

 function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
 }
 function getData() 
 {
    firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();