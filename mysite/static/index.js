  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getDatabase, set, ref ,push, child, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC9cnSB8s7MvRRzulmQUmtz5pvHNt9obm4",
    authDomain: "unikey-e0948.firebaseapp.com",
    databaseURL: "https://unikey-e0948-default-rtdb.firebaseio.com",
    projectId: "unikey-e0948",
    storageBucket: "unikey-e0948.appspot.com",
    messagingSenderId: "922862936544",
    appId: "1:922862936544:web:05bd05c5d2bf0136c24b85",
    measurementId: "G-WJ8X313WWB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  button-register.addEventListener('click',(e) => {
    var email = document.getElementById('login').value;  
    var senha = document.getElementById('senha').value;   

    const userId = push(child(ref(database), 'users')).key;
   
    set(ref(database, 'users/' + userId), {
    email: login,
    senha: senha

   });
   alert('Registrado!');
  });

  getData.addEventListener('click',(e) => {

    $('#dataTbl td').remove();
    var rowNum = 0; 
    const dbRef = ref(database, 'users/');

    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      // ...
      rowNum += 1; 
      var row = "<tr><td>" + rowNum + "</td><td>" + childData.firstName + "</td><td>" + childData.lastName + "</td><td>" + childData.email + "</td></tr>"

      $(row).appendTo('#dataTbl');
      
      });
    }, {
       onlyOnce: true
    });


  });
