const generateTweets = function (e){
  $('#mp-tweet-generator-loading').addClass("show")
  $('#mp-tweet-generator-loading').removeClass("hide")
  console.log(e);
  $.get("https://tweeter.tippingpointuk.workers.dev/3", function(data){
    console.log(data);
    var htmlOut = ""
    for (var i in data.tweets){
      htmlOut += generateHtmlTweet(data.tweets[i])
    }
    $('#mp-tweet-generator-insert-target').html(htmlOut);
    $('#mp-tweet-generator-loading').addClass("hide")
    $('#mp-tweet-generator-loading').removeClass("show")
  })
}

const generateHtmlTweet = function(tweet){
  // Got through each work and add <span>s for hashtags etc
  var tweetByWord = tweet.text.split(' ');
  var tweetText = "";
  for (var i in tweetByWord){
    var word = tweetByWord[i];
    console.log(word)
    var spanClass = null;
    if (word[0] == "#"){
      spanClass = "hashtag";
    }else if (word[0] == "@"){
      spanClass = "at";
    }else if (word.includes("://")){
      spanClass = "link";
    }
    if (spanClass){
      tweetText += ` <span class="${spanClass}">${word}</span>`
    }else{
      tweetText += ` ${word}`
    }
  }
  var tweet =  `
    <div class=tweet>
      <a target="_blank" href="${ tweet.ctt }">
        ${ tweetText.replace("\n", "<br><br>") } <span class='link' >${ tweet.link }</span>
      </a>
    </div>
  `;
  return tweet;
}

// Event handling
$( document ).on('load', function (){
});
$('#mp-tweet-generator-button').on('click', generateTweets);
