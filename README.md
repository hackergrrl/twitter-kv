# twitter-kv

> Short lived key-value store using Twitter user feeds.

## Background

Sometimes you'd like to store a simple (key, value) mapping for a short time
using a service that's already running and is highly available -- like Twitter.

*No access tokens required!*

Since HTTP scraping is used under the hood in
[`latest-tweets`](https://github.com/noffle/latest-tweets), only the last couple
dozen tweets will be available, making this ideal for use as a transient store.

## Usage

```js
var resolve = require('twitter-kv')

resolve('noffle', 'test', function (err, value) {
  if (err) return console.log(err)

  console.log('value:', value)
})
```

This will look for a recent tweet in my timeline of the format

```
key = value
```

If it finds it -- let's say I have a tweet that says `foo = bar` -- I can expect
the following output

```
value: bar
```

## API

```js
var twitterKv = require('twitter-kv')
```

### resolve(user, key, cb)

Queries the twitter user feed for `user`, looking for an entry of the form `key
= value`. Calls `cb(err, value)` with the most recent value for `key`. Expect
`key` to be `null` if no value was found.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install twitter-kv
```

## See Also

- [latest-tweets](https://github.com/noffle/latest-tweets)

## License

ISC

