# Tweet generating tool

A tool for generating tweets to target MPs. Made for the #StopCambo group.

## Embed codes

Each embed code contains a few parts:

1. a script tag to include jquery. can be left out if your site already uses jquery
1. a style sheet to style the tweets. can be replaced with your own if desired.
1. The `div` containing the button and loading symbol.
1. the `div` for inserting the tweets. This is where you put details on who you are targetting.
    * `tweets`: the number of tweets inserted.
    * `mp-airtable-view`: the view to generate MPs from. Make sure they all have a `twitter_username`.
    * `tweets-airtable-view`: the view to generate tweets from.
1. The main script that inserts the tweets.

If you are adding more than one buton to the same page, you should only repeat
`3.` and `4.`. The style sheet and jquery script should be at the top of your page,
and the main script at the bottom.

i.e. put this in the `<head>` of your website
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js" charset="utf-8"></script>
<link rel="stylesheet" href="https://tippingpointuk.github.io/tweetatmpsfrontend/style.css">
```

Things that look like this (the buttons) in the middle.
```html
<div class="mp-tweet-generator-button"><button type="button" name="generateTweets">Generate Tweets!</button><img src="https://tippingpointuk.github.io/tweetatmpsfrontend/loading.svg" class="hide mp-tweet-generator-loading"/></div><div class="mp-tweet-generator-output" tweets=18 mp-airtable-view="viwAfHCIKMuHjpoKO" tweets-airtable-view="viwT9DujPVYtrAhk8"></div>
```

and this at the end of the `<body>`:

```html
<script src="https://tippingpointuk.github.io/tweetatmpsfrontend/main.js" charset="utf-8"></script>
```

Some specific examples:

### All conservative MPs with twitter handles

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js" charset="utf-8"></script>
<link rel="stylesheet" href="https://tippingpointuk.github.io/tweetatmpsfrontend/style.css">
<div class="mp-tweet-generator-button"><button type="button" name="generateTweets">Generate Tweets!</button><img src="https://tippingpointuk.github.io/tweetatmpsfrontend/loading.svg" class="hide mp-tweet-generator-loading"/></div><div class="mp-tweet-generator-output" tweets=4 mp-airtable-view="viwAfHCIKMuHjpoKO" tweets-airtable-view="viwT9DujPVYtrAhk8"></div>
<script src="https://tippingpointuk.github.io/tweetatmpsfrontend/main.js" charset="utf-8"></script>
```

<script src="https://code.jquery.com/jquery-3.6.0.min.js" charset="utf-8"></script><link rel="stylesheet" href="https://tippingpointuk.github.io/tweetatmpsfrontend/style.css"><div class="mp-tweet-generator-button"><button type="button" name="generateTweets">Generate Tweets!</button><img src="https://tippingpointuk.github.io/tweetatmpsfrontend/loading.svg" class="hide mp-tweet-generator-loading"/></div><div class="mp-tweet-generator-output" tweets=4 mp-airtable-view="viwAfHCIKMuHjpoKO" tweets-airtable-view="viwT9DujPVYtrAhk8"></div>

### All MPs in the Conservative Environment Network

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js" charset="utf-8"></script>
<link rel="stylesheet" href="https://tippingpointuk.github.io/tweetatmpsfrontend/style.css">
<div class="mp-tweet-generator-button"><button type="button" name="generateTweets">Generate Tweets!</button><img src="https://tippingpointuk.github.io/tweetatmpsfrontend/loading.svg" class="hide mp-tweet-generator-loading"/></div><div class="mp-tweet-generator-output" tweets=4 mp-airtable-view="viwAfHCIKMuHjpoKO" tweets-airtable-view="viwHmxiJpl1HS8SMe"></div>
<script src="https://tippingpointuk.github.io/tweetatmpsfrontend/main.js" charset="utf-8"></script>
```

<div class="mp-tweet-generator-button"><button type="button" name="generateTweets">Generate Tweets!</button><img src="https://tippingpointuk.github.io/tweetatmpsfrontend/loading.svg" class="hide mp-tweet-generator-loading"/></div><div class="mp-tweet-generator-output" tweets=4 mp-airtable-view="viwAfHCIKMuHjpoKO" tweets-airtable-view="viwHmxiJpl1HS8SMe"></div>


<script src="https://tippingpointuk.github.io/tweetatmpsfrontend/main.js" charset="utf-8"></script>
