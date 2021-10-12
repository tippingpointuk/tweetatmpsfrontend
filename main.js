const generateTweets = function (e){
  var loadingSymbol = $("#mp-tweet-generator-loading");
  var tweetInsetBox = $('#mp-tweet-generator-insert-target');
  var noTweets = tweetInsetBox.attr('tweets') || 4;
  var mpView = tweetInsetBox.attr('mp-airtable-view') || "viwT9DujPVYtrAhk8";
  var tweetView = tweetInsetBox.attr('tweets-airtable-view') || "viwypQZddK7OJOQpU";
  loadingSymbol.addClass("show");
  loadingSymbol.removeClass("hide");
  console.log(e);
  var tweetsData = {
    "mpView": mpView,
    "tweetView": tweetView,
    "tweets": noTweets
  }
  $.post("http://127.0.0.1:8787/",JSON.stringify(tweetsData), insertTweets, 'json')
}

const insertTweets = (data) => {
  var loadingSymbol = $("#mp-tweet-generator-loading");
  console.log(data);
  var htmlOut = ""
  for (var i in data.tweets){
    htmlOut += data.tweets[i].html
  }
  $('#mp-tweet-generator-insert-target').html(htmlOut);
  loadingSymbol.removeClass("show");
  loadingSymbol.addClass("hide");
}

// Event handling
$('#mp-tweet-generator-button').on('click', generateTweets);
