var la = require('lazy-ass')
var check = require('check-more-types')

/* global describe, it */

describe('current commit message', function () {
  var commitMessage = require('./commit-message').commitMessage
  it('grabs commit message', function () {
    return commitMessage().then(
      function (str) {
        la(check.unemptyString(str), 'expected a message', str)
      },
      function (err) {
        la(err instanceof Error, 'rejected with error', err)
        console.log(err)
      }
    )
  })
})
