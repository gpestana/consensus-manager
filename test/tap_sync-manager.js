var test      = require('tape'),

io                = require('socket.io-client'),
SyncManager       = require('../lib/sync_manager.js'),
SyncAll_str  = require('../strategies/sync_room.js')

/*
 communication between server and clients
for testing purposes is based on events.
*/

var server

var opts = {'nr_res': 3}  
var str = new SyncAll_str(opts, 'even')
var sync_manager = new SyncManager(str)
  




function connect_cli() {
  var socket = io.connect('http://localhost:3000', {
    'reconnection delay': 0,
    'reopen delay': 0,
    'force new connection': true
  })

  clients.push(socket)

  socket.on('connect', function() {
    console.log('client connected');
  })
  
  socket.on('disconnect', function() {
    console.log('client disconnected');
  })

}

function disconnect_cli(socket) {
  if(socket.connected) socket.disconnect() 
}


test('constructor', function(t) {
  
  t.end()

}) 
