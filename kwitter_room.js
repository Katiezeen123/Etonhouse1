
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA411OVgWgRWAmVdZbVBF6X_wMF8INTZiY",
      authDomain: "kwitter-77e95.firebaseapp.com",
      projectId: "kwitter-77e95",
      storageBucket: "kwitter-77e95.appspot.com",
      messagingSenderId: "383327261629",
      appId: "1:383327261629:web:73a927030c362264fcf8d4",
      measurementId: "G-HD2JZ62WX9"
    };
    
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
