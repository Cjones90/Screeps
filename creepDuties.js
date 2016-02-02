module.exports = {

  archer: function(creep, home) {
    var enemies = creep.pos.findInRange(Game.HOSTILE_CREEPS, 8);
    if(enemies.length > 0)
      creep.moveTo(enemies[0]);
      creep.attack(enemies[0]);
  },

  builder: function(creep, home) {
    if(creep.energy === 0) {
         creep.moveTo(home);
         home.transferEnergy(creep);
     }
     else {
         var targets = creep.room.find(Game.CONSTRUCTION_SITES);
         if(targets.length) {
             creep.moveTo(targets[0]);
             creep.build(targets[0]);
         }
     }
   },

  harvester: function(creep, home) {
      var source = creep.room.find(Game.SOURCES);
      // var closest = creep.pos.findClosest(source);
      // console.log(closest);
      if(creep.energy < creep.energyCapacity) {
         creep.moveTo(source[1]);
         creep.harvest(source[1]);
     }
     else {
         creep.moveTo(home);
         creep.transferEnergy(home);
     }
   },

  knight: function (creep, home) {
    var enemies = creep.pos.findInRange(Game.HOSTILE_CREEPS, 8);
    if(enemies.length > 0)
      creep.moveTo(enemies[0]);
      creep.attack(enemies[0]);
  },
}
