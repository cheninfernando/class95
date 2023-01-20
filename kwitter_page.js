const firebaseConfig = {
      apiKey: "AIzaSyC2RzZlYc1zRcEHAzlZaRcbSMSDLGfVrTY",
      authDomain: "let--s-chat-9b92f.firebaseapp.com",
      databaseURL: "https://let--s-chat-9b92f-default-rtdb.firebaseio.com",
      projectId: "let--s-chat-9b92f",
      storageBucket: "let--s-chat-9b92f.appspot.com",
      messagingSenderId: "70731818191",
      appId: "1:70731818191:web:059d6a3374a5e4d24d83ba"
    };
    
    user_name=localStorage.getItem("user_name");

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();


function send (){
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("message").value="";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
