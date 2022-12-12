var nomePessoa, numMatricula, usuario, emailPessoa, telPessoa;

function readFom() {
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
};