###consensus-manager

####consensus wrapper for a distributed topology

The consensus manager listens and stores responses from remote peers until the
consensus is reached. The consensus is reached depending on the strategy 
implemented.   

The *consensus manager* controls:
* time it takes to reach consensus
* accepts and stores responses from peers
* notices upper layer when consensus is reached and its output (if any)  

The *strategy* defines:  
* when consensus is reached  


####installation
> sudo npm install consensus-manager


####example
```javascript

Strategy         = require('..')
ConsensusManager  = require('ConsensusManager') 

var strategy = new Startegy(strategy_opts)  
var consensus = new ConsensusManager(strategy)  


consensus.on('listening', function(){
  //event fired when consensus manager is initialized
})

consensus.on('consensus', function(result, time_diff){
  //event fired when consensus is reached
})

consensus.on('noListening', function(){
  //event fired when a peer's response arrives but consensus has been reached
})



//init consensus manager
consensus.init// ... stuff happen, user sent a response

//...
 
//peer answers. consensus manager processes its response
consensus.process(response)

```


