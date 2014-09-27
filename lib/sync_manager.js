function SyncManager(strategy) {
  self = this
  self.strategy = strategy
}

//opts: roomID or nothing
SyncManager.prototype.sync = function(opts, cb) {
  var init_timestamp = new Date() //timestamp initial time
 
  //starts sync (to room or all) 
  if(opts.roomID) {
    socket.in(opts.roomID).emit(self.strategy.eventID)
  } else {
    socket.emit(self.strategy.eventID)
  }

  //handles answer from client
  socket.on(this.strategy.eventID+' res', function(res) {
    count = count+1
    self.strategy.resHandler(res)
    if(count == self.strategy.nr_res) {
      //calculate time that took to sync
      var end_timestamp = new Date()
      self.strategy.done(init_timestamp-end_timestamp, cb)
    } 
  })
}

module.exports = SyncManager
