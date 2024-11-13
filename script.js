function checkPassword() {
    var password = document.getElementById("code").value;
    if (password === "jslk") {
      document.getElementById("homepage").style.display = "block";
      document.getElementById("login").style.display = "none";
    } else {
      alert("incorrect");
    }
  }