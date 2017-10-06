$(document).ready(function() {
  $('#registration_block').submit(function(event) {
    event.preventDefault();
    var userEmail = $("#email").val();
    var userPass = $("#password").val();
    var userPassRepeat = $("#password_repeat").val();
    var userAgreement = $("#check_agreement").prop("checked");
    var checkMail = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(userEmail));
  
    if ((userEmail != "") || (userPass != "") || (userPassRepeat != "")) {
      if ((userEmail.length < 5) || (!checkMail)) {
        alert("Не правильно введён Email.");
      } else {
        if (userPass.length < 6) {
          alert("Пароль не соответствует требованиям!");
        } else {
          if (userPass != userPassRepeat) {
            alert("Пароли не совпадают!");
          } else {
            if (!userAgreement){
              alert("Соглашение не подтвержденно!");
            } else {
              alert("Регистрация завершенна!");
            }
          }
        }
      }
    } else {
      alert("Не все поля заполнены!");
    }
  });
});
