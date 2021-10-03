# Tweet at MPs tool

A simple tool that takes a bank of tweets and gives people a list of tweets,
with easy click-to-tweet functionality. Each tweet is targeted at a random
selction of MPs.

## How it works

### 1. Form

* Name
* Postcode
* Next -->

SOME EXAMPLE IMAGE

### 2. Returns a list of tweets

SOME EXAMPLE IMAGE

## Tools used

* [Parliamentary Members API](https://members-api.parliament.uk/)
  * Ended up using an airtable of data extacted from here.
* [Airtable](https://airtable.com/): for list of tweets

## Back end

A cloudflare worker that returns X random tweets with @INSTERTMP instead of an MP's name.

[See it in action here](https://tweeter.tippingpointuk.workers.dev/5).

## Front end

1. Tweet Tory MPs button **Generate tweets**
1. Generate a list of MPs, outputted as formatted text and linked to a click to tweet link
  * Make sure that there the ":visited" format is very obvious.
  * Use [this formatting as a place to start](https://www.axedrax.ga/action/social-media/#tweets).
