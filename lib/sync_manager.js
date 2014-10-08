var util = require("util");
var events = require("events");

module.exports = ConsensusManager
util.inherits(ConsensusManager, events.EventEmitter)

function ConsensusManager(strategy) {
  self = this
  self.init_timestamp
  self.strategy = strategy
  self.results = []
  self.state = 'listening'
}

ConsensusManager.prototype.init = function() {
  self.init_timestamp = new Date()
  self.state = 'listening'
}

ConsensusManager.prototype.process = function(res) {
  if(self.state == 'listening') {
    var now_timestamp = new Date()
    self.results.push(res)
    self.strategy.isReady(results, now_timestamp-init_timestamp, 
      function(ready) {
        if(ready) {
          self.state = 'consensus'
        }
    })  
  }
}


