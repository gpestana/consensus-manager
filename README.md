##consensus-manager

###consensus wrapper for a server-client or master-slaves remote topology

The consensus manager listens and stores responses from remote peers until the
consensus is reached. The consensus is reached depending on the strategy implemented.  


###example
``javascript

Strategy         = require('..strategies/minimum_str.js')
ConsensusManager  = require('ConsensusManager') 

var strategy = new Startegy(strategy_opts)  
var consensus = new ConsensusManager(strategy)  


//init consensus manager


``
