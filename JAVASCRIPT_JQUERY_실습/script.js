let count = 1;
$(document).ready(function () {
  $("#addTagButton").click(function () {
    var tagName = $("#tagInput").val().trim();
    if (tagName) {
      $("#tagList").append("<li>" + tagName + "</li>");
      $("li").last().attr('class', "li"+count);
      $("#tagInput").val("");
      count += 1;
    }
  });
  
  $("#tagInput").keypress(function (e) {
    if (e.which === 13) {
      $("#addTagButton").click();
    }
  });
});
