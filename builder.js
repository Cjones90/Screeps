
//Actions for the builder role
module.exports = function(creep, home) {
    if(creep.energy === 0) {
       creep.moveTo(home);
       home.transferEnergy(creep);
   }
   else {
       let targets = creep.room.find(Game.CONSTRUCTION_SITES);
       if(targets.length) {
           creep.moveTo(targets[0]);
           creep.build(targets[0]);
       }
   }
};
