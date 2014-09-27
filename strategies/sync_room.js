//ask for current time and computes the largest

function SyncAll_strategy(opts, eventID) {
  self            = this
  self.nr_res     = opts.nr_res //or defines nr_res based on logic
  self.eventID    = eventID    
  self.res_array  = [] 
}

this.prototype.resHandler = function(res) {
  //simply stores all the values
  self.res_array.append(res)
}

this.prototype.done = function(total_time, cb) {
  //when all answers are received, return largest value
  cb(Math.max.apply(Math, self.res_array))
  return 
}

module.exports = SyncAll_strategy
