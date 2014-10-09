module.exports = minimum_str

function minimum_str(opts) {
  this.opts       = opts 
  this.res_array  = [] 

}

minimum_str.prototype.isReady = function(results, time_diff, cb) {
  if(results.length == this.opts.min_res) {
    cb(true, results, time_diff)
  } 
  else cb(false)
}
