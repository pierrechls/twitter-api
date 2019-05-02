[![version](https://img.shields.io/github/release/pierrechls/twitter-api.svg?style=for-the-badge&logo=appveyor)](https://github.com/pierrechls/twitter-api)

# Twitter API :hatched_chick:

> A simple Node.js Twitter API

## :grey_exclamation: Prior installation

#### Install external dependencies

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)

#### Create Twitter application

Create a Twitter application from [Twitter developer platform](https://developer.twitter.com/en/apps).

## :rocket: How to install ?

#### Clone the repo

```bash
$ git clone https://github.com/pierrechls/twitter-api.git
```

#### Install dependencies

```
$ yarn install
```

## :hammer_and_wrench: How to configure ?

#### Environnement settings

- Create _.env_ file by running :

```bash
$ cp .env.example .env
```

- Set your configuration :

```bash
# API
API_URL="<YOUR_API_URL>"   # Your local API URL (for example: `http://localhost)
API_PORT="<YOUR_API_PORT>" # Your local API port (for example: `3000`)

# TWITTER
TWITTER_USERNAME="<YOUR_TWITTER_USERNAME>"               # Username
TWITTER_CONSUMER_KEY="<YOUR_CONSUMER_KEY>"               # API key
TWITTER_CONSUMER_SECRET="<YOUR_CONSUMER_SECRET>"         # API secret key
TWITTER_ACCESS_TOKEN="<YOUR_ACCESS_TOKEN>"               # Access token
TWITTER_ACCESS_TOKEN_SECRET="<YOUR_ACCESS_TOKEN_SECRET>" # Access token secret
```

## :video_game: How to use it ?

#### Run server

```bash
$ yarn server
```

#### Use APIs

| Method | URL | Description | Twitter API reference
| --- | --- | --- | --- |
| `GET` | `/tweets` | Returns a collection of the most recent Tweets posted by the user indicated by the screen_name or user_id parameters. | [statuses/user_timeline](https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline.html)

## :rocket: How to deploy

#### Heroku

- Create a Heroku application from [here](https://dashboard.heroku.com/new-app)
- Adding your Heroku application remote url to your local repository :

```bash
$ heroku git:remote -a <YOUR_HEROKU_APP_NAME>
```

- Set Heroku config vars

```bash
$ heroku config:set TWITTER_USERNAME="<YOUR_TWITTER_USERNAME>" \
                    TWITTER_CONSUMER_KEY="<YOUR_CONSUMER_KEY>" \
                    TWITTER_CONSUMER_SECRET="<YOUR_CONSUMER_SECRET>" \
                    TWITTER_ACCESS_TOKEN="<YOUR_ACCESS_TOKEN>" \
                    TWITTER_ACCESS_TOKEN_SECRET="<YOUR_ACCESS_TOKEN_SECRET>"
```

_NB : you can also set yours Heroku config vars from the interface by going into the Settings application tab_

- Deploy to Heroku

```bash
$ git push heroku master
```

## :books: Documentation

Please refer to the [Twitter developer documentation](https://developer.twitter.com/en/docs).

## :raised_hands: Contribute

Contributing to [twitter-api](https://github.com/pierrechls/twitter-api) it's a piece of :cake:. You have an idea about a new feature ? Fork the repo, do your stuff and open a [pull request](https://github.com/pierrechls/twitter-api/compare) ! You can also report a problem or a suggestion by opening an [issue](https://github.com/pierrechls/twitter-api/new).

## :tada: Credits

Project developed by [pierrechls](https://github.com/pierrechls/).