
//Actions for the harvester role
module.exports = function(creep, home) {
    let source = creep.room.find(Game.SOURCES);
    // let closest = creep.pos.findClosest(source);
    // console.log(closest);
    if(creep.energy < creep.energyCapacity) {
       creep.moveTo(source[0]);
       creep.harvest(source[0]);
   }
   else {
       creep.moveTo(home);
       creep.transferEnergy(home);
   }
};
