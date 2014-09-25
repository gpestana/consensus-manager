function SyncManager(entrypoint, req_user, nr_users) {
  this.entrypoint = entrypoint
  this.req_user   = req.user //send last msg to user who requested sync
  this.init()
}

SyncManager.prototype.init() {
  this.entrypoint.on('connection', function(socket) (
    socket.on('current time', function(curr_time) {
      //wait for all users to answer
      //send biggest <time> or 1st !=0
      socket.emit('sync', curr_time)
    })
  ))
}

SyncManager.prototype.sync = function(roomID) {
  this.entrypoint.in(roomID).emit('sync')
}


module.exports = SyncManager
