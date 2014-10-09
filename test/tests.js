var test          = require('tape'),
Strategy         = require('../strategies/minimum_str.js')
ConsensusManager  = require('../lib/ConsensusManager.js') 

var str_opts = {'min_res': 2}
var strategy = new Strategy(str_opts)

var consensus = new ConsensusManager(strategy)


test('consensus', function(t) {
  t.plan(6)

  consensus.on('listening', function() {
    t.equal(true, true, 'consensus manager triggered listening event')        
  })
  t.notEqual(consensus.strategy, undefined, 'strategy has been initialized')
  t.equal(consensus.random, undefined, 'double-check')

  consensus.on('consensus', function(res, time_diff) {
    t.equal(res.length, 2, 'consensus reached. length ok')
    t.notEqual(time_diff, 0, 'time diff not zero')
  })

  consensus.on('notListening', function(){
    t.equal(true, true, 'not listening after consensus reached')
  })

  consensus.init()  
  consensus.process('res1')
  consensus.process('res2') 
  consensus.process('res3') 

})

