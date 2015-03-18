
//The main game loop

const home = Game.spawns.Spawn1;
const harvester = require('harvester');
// const builder = require('builder');
const knight = require('knight');
const creepMaker = require('creepMaker');
const creepOrder = require('creepOrder');

// Initial spawn
if(home.room.find(Game.MY_CREEPS).length === 0) {
  Game.spawns.Spawn1.createCreep([Game.WORK, Game.WORK, Game.CARRY, Game.MOVE, Game.MOVE], "harvester1", {role: 'harvester'});
}

if(home.room.find(Game.MY_CREEPS).length !== 0) {
    let creepCount = home.room.find(Game.MY_CREEPS).length;
    let nextCreep = creepOrder(creepCount);
    creepMaker(home, nextCreep);

    for(let i in Game.creeps) {

        let creep = Game.creeps[i];

        if(creep.memory.role === 'harvester') {
            harvester(creep, home);
        }

        if(creep.memory.role === 'builder') {
            builder(creep, home);
        }

        if(creep.memory.role === 'knight') {
            knight(creep, home);
        }
    }
}
