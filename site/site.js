
$(function() {
  $("#loadIframe").click(function(event) {
    event.preventDefault();

    // remove old iframes
    $("#third_party_iframe").remove();

    // make a new iframe
    var iframe = $("<iframe>");
    iframe.attr({
      id: 'third_party_iframe',
      src: 'http://10.246.29.67:8080/iframe.html',
      width: "400",
      height: "300",
      border: "0"
    });

    $('body').append(iframe);
  });

  $("#openWindow").click(function(event) {
    event.preventDefault();

    var windowOpenOpts = "menubar=0,location=1,resizable=1,scrollbars=1,status=0,dialog=1,width=400,height=200";

    WinChan.open({
      url: 'http://10.246.29.67:8080/dialog.html',
      relay_url: "http://10.246.29.67:8080/relay.html",
      window_features: windowOpenOpts
    }, function(err, r) {

    });;
  });
});

