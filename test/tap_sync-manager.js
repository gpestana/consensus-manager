var test     = require('tape'),

io          = require('socket.io-client'),
SyncMmanager = require('../lib/sync_manager.js')

var clients = []

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

function discoinnect_cli(socket) {
  if(socket.connected) socket.disconnect() 
}


test('constructor', function(t) {
  connect_cli() 
  t.end()

}) 
