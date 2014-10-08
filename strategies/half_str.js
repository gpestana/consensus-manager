module.exports = half_str

function half_str(opts) {
  self            = this
  self.min_res    = opts.min_res 
  self.cb         = opts.cb
  self.res_array  = [] 

  self.isReady = function(results, time_diff, cb) {
    //consensus premise
    if(results.length == self.min_res) {
      cb(true)
      self.done(results, time_diff)  
    } 
    else { cb(false) }
  }

  self.done = function(results, time_diff, cb) { 
    console.log('is done. and now ?')   
  }

}

