$("#sendMail").on("click", function() {
  var name = $("#name").var().trim();
  var phone = $("#phone").var().trim();
  var messege = $("#messege-text").var().trim();

  if(name == "") {
    $("#errorMess").text("Ведите Имя");
    return false;
  } else if(phoen == ""){
    $("#errorMess").text("Ведите номер телефона");
    return false;
  }
  $("#errorMess").text("");

  $.ajax({
    url: 'ajax/mail.php',
    type: 'POST',
    cache: false,
    data: { 'name':name, 'phone':phone, 'messege-text':messege},
    beforeSend: function() {
      $("#sendMail").prop("disabled", true);
    },
    success: function(data) {
      if(!data)
        alert("Были ошибки сообшение не отправлено");
      else
        $("mailForm").trigger("reset");
      $("#sendMail").prop("disabled", false);
    }
  });
});
