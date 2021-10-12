const generateTweets = function (e){
  var loadingSymbol = $(e.currentTarget).children(".mp-tweet-generator-loading");
  var tweetInsetBox = $(e.currentTarget).next(".mp-tweet-generator-output ");
  var noTweets = tweetInsetBox.attr('tweets') || 4;
  var mpView = tweetInsetBox.attr('mp-airtable-view') || "viwGU0zXycPJNKFLN";
  var tweetView = tweetInsetBox.attr('tweets-airtable-view') || "viwT9DujPVYtrAhk8";
  loadingSymbol.addClass("show");
  loadingSymbol.removeClass("hide");
  var tweetsData = {
    "mpView": mpView,
    "tweetView": tweetView,
    "tweets": noTweets
  }
  $.post(
    "https://tweeter.tippingpointuk.workers.dev",
    JSON.stringify(tweetsData),
    function(data){
      insertTweets(data,loadingSymbol,tweetInsetBox);
    },
    'json')
}

const insertTweets = function(data,loadingSymbol,tweetInsetBox){
  console.log(data);
  var htmlOut = ""
  for (var i in data.tweets){
    htmlOut += data.tweets[i].html
  }
  tweetInsetBox.html(htmlOut);
  loadingSymbol.removeClass("show");
  loadingSymbol.addClass("hide");
}

// Event handling
$('.mp-tweet-generator-button').on('click', generateTweets);
