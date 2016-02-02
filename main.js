
//The main game loop

var home = Game.spawns.Spawn1;
var creepDuties = require('creepDuties');
var creepMaker = require('creepMaker');
// var creepOrder = require('creepOrder');



//Here get count of all creep roles then pass in that object
// var creepCount = home.room.find(Game.MY_CREEPS).length;
// var nextCreep = creepOrder(creepCount);
creepMaker(home);

  for(var i in Game.creeps) {

      var creep = Game.creeps[i];

      if(creep.memory.role === 'harvester') {
        creepDuties.harvester(creep, home);
      }

      if(creep.memory.role === 'builder') {
        creepDuties.builder(creep, home);
      }

      if(creep.memory.role === 'knight') {
        creepDuties.knight(creep, home);
      }

      if(creep.memory.role === 'archer') {
        creepDuties.knight(creep, home);
      }
  }
