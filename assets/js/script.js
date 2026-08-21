// Write cool js hwere

function tjekLogin(username, password) {
  const korrektBrugernavn = "Kristian";
  const korrektPassword = "1234";

  if (username === korrektBrugernavn && password === korrektPassword) {
    return true;
  } else {
    return false;
  }
}

console.log(tjekLogin("Kristian", "1234")); // true
console.log(tjekLogin("Forkert", "1234"));  // false
console.log(tjekLogin("", ""));             // false
console.log(tjekLogin("KRISTIAN", "1234")); // false


function haandterLogin(username, password) {
  const erLoggetInd = tjekLogin(username, password);

  if (erLoggetInd === true) {
    document.cookie = "loggetInd=true; max-age=" + (60 * 60 * 24) + "; path=/";
    console.log("Login lykkedes – cookie sat");
  } else {
    console.log("Login fejlede – viser login-skærm");
    document.getElementById("loginSkaerm").style.display = "block";
  }
}

haandterLogin("Kristian", "1234");
