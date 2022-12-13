  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getFirestore, setDoc, addDoc, doc, db, collection} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
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
  const db = getFirestore(app);

  cadastrarPessoa.addEventListener('click',(e) => {
  var nomePessoa = document.getElementById("nomePessoa").value;
  var numMatricula = document.getElementById("numMatricula").value;
  var usuario = document.getElementById("usuario").value;
  var emailPessoa = document.getElementById("emailPessoa").value;
  var telPessoa = document.getElementById("telPessoa").value;  

    setDoc(collection(db, "usuarios"), {
      numMatricula: numMatricula,
      nomePessoa: nomePessoa,
      usuario: usuario,
      emailPessoa: emailPessoa,
      telPessoa: telPessoa

   });
   alert('Registrado!');
  });

var nomePessoa, numMatricula, usuario, emailPessoa, telPessoa;

/*  function readFom() {
  nomePessoa = document.getElementById("nomePessoa").value;
  numMatricula = document.getElementById("numMatricula").value;
  usuario = document.getElementById("usuario").value;
  emailPessoa = document.getElementById("emailPessoa").value;
  telPessoa = document.getElementById("telPessoa").value;
  console.log(nomePessoa, numMatricula, usuario, emailPessoa, telPessoa);
}

document.getElementById("cadastrarPessoa").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("usuarios/" + numMatricula)
    .set({
      numMatricula: numMatricula,
      nomePessoa: nomePessoa,
      usuario: usuario,
      emailPessoa: emailPessoa,
      telPessoa: telPessoa,
    });
  alert("Usuario cadastrado");
  document.getElementById("numMatricula").value = "";
  document.getElementById("nomePessoa").value = "";
  document.getElementById("emailPessoa").value = "";
  document.getElementById("telPessoa").value = "";
};*/
