
//The main game loop

const home = Game.spawns.Spawn1;
const creepDuties = require('creepDuties');
const creepMaker = require('creepMaker');
const creepOrder = require('creepOrder');

// Initial spawn
if(home.room.find(Game.MY_CREEPS).length === 0) {
  Game.spawns.Spawn1.createCreep([Game.WORK, Game.WORK, Game.CARRY, Game.MOVE, Game.MOVE], "harvester1", {role: 'harvester'});
}

if(home.room.find(Game.MY_CREEPS).length !== 0) {
    var creepCount = home.room.find(Game.MY_CREEPS).length;
    var nextCreep = creepOrder(creepCount);
    creepMaker(home, nextCreep);

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
    }
}
