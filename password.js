let userName = document.getElementById("userName");
let lengthInput = document.getElementById("length");

let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let num = document.getElementById("num");
let special = document.getElementById("special");

let myBtn = document.getElementById("myBtn");
let newpassword = document.getElementById("newpassword");

let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numnum = "1234567890";
let sp = "@#$&";

myBtn.addEventListener("click", function () {

    let characters = "lowerChar+upperChar+numnum+sp";

    

    let passwordLength = Number(lengthInput.value);
    let name = userName.value;

    let generatedPassword = name;
    

     generatedPassword += lowerChar[Math.floor(Math.random() * lowerChar.length)];
     generatedPassword += upperChar[Math.floor(Math.random() * upperChar.length)];
     generatedPassword += numnum[Math.floor(Math.random() * numnum.length)];
     generatedPassword += sp[Math.floor(Math.random() * sp.length)];

    for (let i = 0; i < passwordLength; i++) {

        let randomIndex = Math.floor(
            Math.random() * characters.length.toFixed(3)
        );

        let randomChar = characters[randomIndex];

        generatedPassword += randomChar;
    }

    newpassword.textContent =
        "Generated password: " + generatedPassword;

        userName.value = "";
       lengthInput.value = "";

       lowercase.checked = false;
      uppercase.checked = false;
      num.checked = false;
       special.checked = false;

});