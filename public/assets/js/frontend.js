// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-dev").on("click", function (event) {
    var id = $(this).data("id");
    var newDev = $(this).data("newdevoured");

    var newDevState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevState
    }).then(
      function () {
        console.log("changed sleep to", newDev);
        
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        
        location.reload();
      }
    );
  });

});