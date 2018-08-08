$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var addressInput= $("input#address").val();
    var keywordInput= $("input#keyword").val();
    var contentInput = $("textarea#content").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".address").text(addressInput);
    $(".keyword").text(keywordInput);
    $(".content").text(contentInput);

    $("#letter").show();

    event.preventDefault();
  });
});
