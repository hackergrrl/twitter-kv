var tweets = require('../latest-tweets')

module.exports = function (user, key, cb) {
  if (!user) return new Error('missing username')
  if (!key) return new Error('missing key')

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
