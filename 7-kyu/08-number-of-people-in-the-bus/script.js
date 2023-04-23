var number = function(busStops){
    let busOnboard = 0;
    let busOffboard = 0;
    for (let i = 0; i < busStops.length; i++) {
      busOnboard += busStops[i][0];
      busOffboard += busStops[i][1];
    }
    return busOnboard - busOffboard;
  }