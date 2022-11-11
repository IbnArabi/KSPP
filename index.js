firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    } else {
    }
  });
  


function run_login(){
    alert("Welcome to the login page");

    var email = document.getElementById("ptid").value;
    var password = document.getElementById("ptpass").value;
}