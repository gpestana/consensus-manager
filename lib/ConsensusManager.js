var util      = require("util"),
EventEmitter  = require("events").EventEmitter;

util.inherits(ConsensusManager, EventEmitter)
module.exports = ConsensusManager

function ConsensusManager(strategy) {
  EventEmitter.call(this)
  
  self = this
  self.init_timestamp
  self.strategy = strategy
  self.results = []
  self.state = 'listening'
}

ConsensusManager.prototype.init = function() {
  self.init_timestamp = new Date()
  self.state = 'listening'

  this.emit('listening')
}

ConsensusManager.prototype.process = function(res) {
  if(self.state == 'listening') {
    var now_timestamp = new Date()
    self.results.push(res)
    self.strategy.isReady(self.results, now_timestamp-self.init_timestamp, 
      function(ready, res, time_diff) {
        if(ready) {
          self.state = 'consensus'
          self.emit('consensus', res, time_diff)
        }
    })  
  } else self.emit('notListening')
}


