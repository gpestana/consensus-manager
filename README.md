##sync-manager

###sync manager for socket.io. syncs different entities depending on the strategy adopted.

ex: room is considered sync when half of the number of the room sent answered to the request

###init 
npm install sync-manager
```javascript
var SyncManager = require('sync-manager')(new StrategyA)
```

###sync request
```javascript
SyncManager.sync(opts, function(opts){
 //opts depends on strategy's output 
}}
```

