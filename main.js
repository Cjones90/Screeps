
//The main game loop

var home = Game.spawns.Home;
var creepDuties = require('creepDuties');
var creepMaker = require('creepMaker');
// var creepOrder = require('creepOrder');



//Here get count of all creep roles then pass in that object
// var creepCount = home.room.find(Game.MY_CREEPS).length;
// var nextCreep = creepOrder(creepCount);
creepMaker(home);

for(var i in Game.creeps) {

  var creep = Game.creeps[i];

  creepDuties[creep.memory.role](creep, home)

}
