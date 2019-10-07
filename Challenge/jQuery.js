$(document).ready(function() {
  $("#addBtn").click(function() {
    shoppingList(addBtn);
  });
  $("#removeBtn").click(function() {
    $(".info").html($("li:last").text())
    $("li:last").remove();
    $(".info").addClass("remove");
    $(".info").removeClass("correct");
    $(".info").removeClass("error");
  });
});

function shoppingList(addBtn) {
  var writtenItem = $("#writtenItem").val();
  var info = $(".info");
  if (writtenItem == 0) {
    info.addClass("error")
    info.removeClass("correct")
    info.removeClass("remove")
    info.html("")
  } else {
    $("ul").append("<li>" + writtenItem + "</li>")
    $("ul li").addClass("list-item");
    info.html(writtenItem + ' <i class="fa fa-check" aria-hidden="true"></i>');
    info.removeClass("error");
    info.removeClass("remove")
    info.addClass("correct");
  }
}