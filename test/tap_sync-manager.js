var test     = require('tape'),

app          = require('express')(),
server       = require('http').Server(app),
io           = require('socket.io')(server),

cio          = require('socket.io-client'),
SyncMmanager = require('../lib/sync_manager.js')

//creates client attached to a given server
function client(srv) {
  var addr = srv.listen().address()
  var url = 'ws://' + addr.address + ':' + addr.port + (nsp || '');
  return ioc(url)
}

test('constructor', function(t) {
  server.listen(80)
  //var cli_1 = client(server)  
  
  t.end()

}) 
