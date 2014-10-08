var test      = require('tape'),



//init
var opts = 
  {'nr_res': 3, 
    function(res, total_time){
      console.log(res)
      console.log(total_time)
    }
  } 
 
var str = new SyncAll_str(opts)
var sync_manager = new SyncManager(str)

test('constructor', function(t) {
  
  t.end()

}) 
