//business logic
function List(title, details, date) {
  this.listTitle = title;
  this.listDetails = details;
  this.listDate = date;
}
List.prototype.fullDescript = function() {
  return "<h3>" + this.listTitle + "</h3> " + this.listDetails + "<br> " + this.listDate;
}

// user interface logic
$(document).ready(function() {
  $("form#list-items").submit(function(event) {
    event.preventDefault();

    var inputtedTitle = $("input#new-title").val();
    var inputtedDetails = $("input#new-details").val();
    var inputtedDate = $("input#new-date").val();

    var newItem = new List(inputtedTitle, inputtedDetails, inputtedDate);

    $("ul#listings").append("<li><span class='title'>" + newItem.fullDescript() + "</span></li>");

    $("input#new-title").val("");
    $("input#new-details").val("");
    $("input#new-date").val("");

    $(".title").last().click(function() {
      // $("#show-list").show();
      // $("#show-list h2").text(newItem.listTitle);
      // $(".compTitle").text(newItem.listTitle);
      // $(".compDetails").text(newItem.listDetails);
      // $(".compDate").text(newItem.listDate);

      $("ul#completed").append("<li><span class='title'>" + newItem.fullDescript() + "</span></li>");

      $("ul#listings li").last().remove();
    });
  });
});
