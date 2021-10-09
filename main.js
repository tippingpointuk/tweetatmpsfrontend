const generateTweets = function (e){
  var loadingSymbol = $("#mp-tweet-generator-loading");
  var tweetInsetBox = $('#mp-tweet-generator-insert-target');
  var noTweets = tweetInsetBox.attr('tweets');
  if (!noTweets){
    noTweets = 4;
  }
  loadingSymbol.addClass("show");
  loadingSymbol.removeClass("hide");
  console.log(e);
  $.get("https://tweeter.tippingpointuk.workers.dev/"+noTweets.toString(), function(data){
    console.log(data);
    var htmlOut = ""
    for (var i in data.tweets){
      htmlOut += data.tweets[i].html
    }
    $('#mp-tweet-generator-insert-target').html(htmlOut);
    loadingSymbol.removeClass("show");
    loadingSymbol.addClass("hide");
  })
}

// Event handling
$('#mp-tweet-generator-button').on('click', generateTweets);
