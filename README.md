# twitter-kv

> key-value store over twitter user feeds

## background

Sometimes you'd like to store a simple small (key, value) mapping. Like, say, an
[IPFS](https://ipfs.io) hash. It'd be nice if you could use a service that's
already running and is highly available.

*No access tokens required!*

## example

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

## api

```js
var resolve = require('twitter-kv')
```

### resolve(user, key, cb)

Queries the twitter user feed for `user`, looking for an entry of the form `key
= value`. Calls `cb(err, value)` with the most recent value for `key`. Expect
`key` to be `null` if no value was found.

## install

With [npm](https://npmjs.org/) installed, run

```
$ npm install twitter-kv
```

## license

ISC
