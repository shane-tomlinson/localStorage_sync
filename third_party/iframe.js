$(function() {
  var count = 0;
  function load() {
    $("#loadCount").remove();
    var loadingEl = $("<div>localStorage load count: " + count + "</div>").attr({
      id: "loadCount"
    }).appendTo("body");

    count++;

    /*
    $("#first").val(localStorage.getItem("first") || "");
    $("#middle").val(localStorage.getItem("middle") || "");
    $("#last").val(localStorage.getItem("last") || "");
    */
    $("#first").val(localStorage["first"] || "");
    $("#middle").val(localStorage["middle"] || "");
    $("#last").val(localStorage["last"] || "");
  }

  load();

  $("form").submit(function(event) {
    event.preventDefault();

    /*
    localStorage.setItem("first", $("#first").val() || "");
    localStorage.setItem("middle", $("#middle").val() || "");
    localStorage.setItem("last", $("#last").val() || "");
    */
    localStorage["first"] = $("#first").val() || "";
    localStorage["middle"] = $("#middle").val() || "";
    localStorage["last"] = $("#last").val() || "";
  });

  $(window).bind("storage", load);
  $("#reload").bind("click", function(event) {
    event.preventDefault();
    load();
  });

//  setInterval(load, 2000);
});

