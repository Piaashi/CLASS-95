var firebaseConfig = {
      apiKey: "AIzaSyAugtaQhTGuIP0JCE_i83X4OPu1vWvQftw",
      authDomain: "kwitter-ba785.firebaseapp.com",
      databaseURL: "https://kwitter-ba785-default-rtdb.firebaseio.com",
      projectId: "kwitter-ba785",
      storageBucket: "kwitter-ba785.appspot.com",
      messagingSenderId: "883009973900",
      appId: "1:883009973900:web:da0b3bf3b39ecc93f3d5a9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!;-)";


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html" ;
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id=" +Room_names +" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}