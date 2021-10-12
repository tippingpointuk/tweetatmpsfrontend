# Tweet generating tool

A tool for generating tweets to target MPs. Made for the #StopCambo groups

## Embed codes

Each embed code contains a few parts:

1. a script tag to include jquery. can be left out if your site already uses jquery
1. a style sheet to style the tweets. can be replaced with your own if desired.
1. The `div` containing the button and loading symbol.
1. the `div` for inserting the tweets. This is where you put details on who you are targetting.
    * `tweets`: the number of tweets inserted.
    * `mp-airtable-view`: the view to generate MPs from. Make sure they all have a `twitter_username`.
    * `tweets-airtable-view`: the view to generate tweets from.
1. The main script that insets the tweets.

### All conservative MPs with twitter handles

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js" charset="utf-8"></script>
<link rel="stylesheet" href="https://tippingpointuk.github.io/tweetatmpsfrontend/style.css">
<div class=""><button type="button" name="generateTweets" id="mp-tweet-generator-button">Generate Tweets!</button><img id="mp-tweet-generator-loading" src="https://tippingpointuk.github.io/tweetatmpsfrontend/loading.svg" class="hide"/></div>
<div class="Tweets-Output" id="mp-tweet-generator-insert-target" tweets=4 mp-airtable-view=viwmvRNLuTByBvMnV tweets-airtable-view=viwT9DujPVYtrAhk8></div>
<script src="https://tippingpointuk.github.io/tweetatmpsfrontend/main.js" charset="utf-8"></script>
```

<script src="https://code.jquery.com/jquery-3.6.0.min.js" charset="utf-8"></script>
<link rel="stylesheet" href="https://tippingpointuk.github.io/tweetatmpsfrontend/style.css">
<div class=""><button type="button" name="generateTweets" id="mp-tweet-generator-button">Generate Tweets!</button><img id="mp-tweet-generator-loading" src="https://tippingpointuk.github.io/tweetatmpsfrontend/loading.svg" class="hide"/></div>
<div class="Tweets-Output" id="mp-tweet-generator-insert-target" tweets=4 mp-airtable-view=viwmvRNLuTByBvMnV tweets-airtable-view=viwT9DujPVYtrAhk8></div>
<script src="https://tippingpointuk.github.io/tweetatmpsfrontend/main.js" charset="utf-8"></script>

### All MPs in the Conservative Environment Network

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js" charset="utf-8"></script>
<link rel="stylesheet" href="https://tippingpointuk.github.io/tweetatmpsfrontend/style.css">
<div class=""><button type="button" name="generateTweets" id="mp-tweet-generator-button">Generate Tweets!</button><img id="mp-tweet-generator-loading" src="https://tippingpointuk.github.io/tweetatmpsfrontend/loading.svg" class="hide"/></div>
<div class="Tweets-Output" id="mp-tweet-generator-insert-target" tweets=4 mp-airtable-view="viwAfHCIKMuHjpoKO" tweets-airtable-view="viwHmxiJpl1HS8SMe"></div>
<script src="https://tippingpointuk.github.io/tweetatmpsfrontend/main.js" charset="utf-8"></script>
```

<div class=""><button type="button" name="generateTweets" id="mp-tweet-generator-button">Generate Tweets!</button><img id="mp-tweet-generator-loading" src="https://tippingpointuk.github.io/tweetatmpsfrontend/loading.svg" class="hide"/></div>
<div class="Tweets-Output" id="mp-tweet-generator-insert-target" tweets=4 mp-airtable-view="viwAfHCIKMuHjpoKO" tweets-airtable-view="viwHmxiJpl1HS8SMe"></div>
<script src="https://tippingpointuk.github.io/tweetatmpsfrontend/main.js" charset="utf-8"></script>
