$(function() {
  function load() {
    $("#first").val(localStorage["first"] || "");
    $("#middle").val(localStorage["middle"] || "");
    $("#last").val(localStorage["last"] || "");
/*
    $("#first").val(localStorage.getItem("first") || "");
    $("#middle").val(localStorage.getItem("middle") || "");
    $("#last").val(localStorage.getItem("last") || "");
    */
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
});

