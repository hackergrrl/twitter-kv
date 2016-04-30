var tweets = require('../latest-tweets')

module.exports = function (key, cb) {
  var addr = key.split('/')

  if (addr.length !== 4) return new Error('malform addr')
  if (addr[0] !== '') return new Error('malformed addr')
  if (addr[1] !== 'twitter') return new Error('malformed addr')

  var user = addr[2]
  var key = addr[3]

  // tweets = function (user, cb) {
  //   cb(null, [
  //     {
  //       content: 'test = foo'
  //     },
  //     {
  //       content: 'test = bar'
  //     },
  //     {
  //       content: 'test = quux'
  //     },
  //   ])
  // }

  tweets(user, function (err, res) {
    if (err) return cb(err)

    var value = null
    res.forEach(function (tweet) {
      if (tweet.content) {
        var m = tweet.content.match(/(.*) = (.*)/)
        if (m) {
          var k = m[1]
          var v = m[2]
          if (k === key) {
            // console.log('match for', k, '=', v)
            if (!value) {
              value = v
            }
          }
        } else {
          // console.log('no match')
        }
      } else {
        // console.log('bad content', tweet)
      }
    })

    cb(null, value)
  })
}
